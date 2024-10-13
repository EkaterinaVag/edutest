import React from 'react';
import Button from '../Button/Button';
import styles from './CommonQuestions.module.css';
import { type QuestionsProps } from '../../types';

const TextareaQuestion = (props: QuestionsProps): JSX.Element => {
  const { question, formik } = props;
  return (
    <form onSubmit={formik.handleSubmit}>
      <h3 className={styles.question}>{question}</h3>

      <label htmlFor="answer">Введите развернутый ответ:</label>
      <br />
      <textarea
        required
        className={styles.textarea}
        id="answer"
        name="answer"
        onChange={formik.handleChange}
        value={formik.values.answer}
      />
      <br />
      <Button text={'Ответить'} />
    </form>
  );
};

export default TextareaQuestion;
