import { useFormik } from 'formik';
import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import useCountDownTimer from '../../hooks/useCountDownTimer';
import { nextQuestionIndex, setCurrentQuestionIndex } from '../../store/slices/questionSlice';
import { questions, totalQuestions } from '../../questions';
import getCurrentQuestionIndex from '../../store/slices/questionSelector';
import styles from './App.module.css';

import ProgressBar from '../ProgressBar/ProgressBar';
import RenderQuestion from '../RenderQuestion';
import TestCompletionPage from '../TestCompletionPage/TestCompletionPage';

interface UserAnswer {
  questionId?: number
  answer: string | string[]
}

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const currentQuestionIndex = useAppSelector(getCurrentQuestionIndex);
  const savedQuestion = localStorage.getItem('currentQuestion');
  if (savedQuestion != null) {
    dispatch(setCurrentQuestionIndex(Number(savedQuestion)));
  }

  const { component: timerComponent, isTimerOver } = useCountDownTimer(5, 0);
  const [usersAnswers, setUsersAnswers] = useState<UserAnswer[]>([]);

  const formik = useFormik({
    initialValues: {
      answer: []
    },
    validate: (values) => {
      const errors: { answer?: string } = {};
      if (values.answer.length === 0) {
        errors.answer = 'Пожалуйста, выберите ответ';
      }
      return errors;
    },
    onSubmit: (values) => {
      const questionId = questions[currentQuestionIndex]?.id;
      setUsersAnswers([
        ...usersAnswers,
        { questionId, answer: values.answer }
      ]);

      localStorage.setItem('currentQuestion', JSON.stringify(currentQuestionIndex + 1));
      void formik.setFieldValue('answer', []);
      dispatch(nextQuestionIndex());
    }
  });

  return isTimerOver || currentQuestionIndex === totalQuestions
    ? <TestCompletionPage isTimerOver={isTimerOver} />
    : (<div className={styles.container}>
      <div className={styles.testBox}>
        <h2 className={styles.title}>Тестирование</h2>
        {timerComponent}
      </div>
      <ProgressBar
        progress={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
        currentQuestionIndex={currentQuestionIndex}
      />
      <RenderQuestion
        type={questions[currentQuestionIndex]?.type}
        question={questions[currentQuestionIndex]?.question}
        options={questions[currentQuestionIndex]?.options}
        formik={formik as any}
      />
    </div>);
};

export default App;
