import React from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import useCountDownTimer from '../../hooks/useCountDownTimer';
import { setCurrentQuestionIndex } from '../../store/slices/questionSlice';
import { questions, totalQuestions } from '../../questions';
import getCurrentQuestionIndex from '../../store/slices/questionSelector';
import styles from './App.module.css';

import ProgressBar from '../ProgressBar/ProgressBar';
import RenderQuestion from '../RenderQuestion';
import TestCompletionPage from '../TestCompletionPage/TestCompletionPage';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const currentQuestionIndex = useAppSelector(getCurrentQuestionIndex);
  const savedQuestion = localStorage.getItem('currentQuestion');
  if (savedQuestion != null) {
    dispatch(setCurrentQuestionIndex(Number(savedQuestion)));
  }

  const { component: timerComponent, isTimerOver } = useCountDownTimer(5, 0);

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
      />
    </div>);
};

export default App;
