import React from 'react';
import { type QuestionsProps } from '../../types';
import Button from '../Button/Button';
import styles from './CommonQuestions.module.css';

const TextInputQuestion = (props: QuestionsProps): JSX.Element => {
  const { question, formik } = props;
  return (
    <form onSubmit={formik.handleSubmit}>
      <h3 className={styles.question}>{question}</h3>

      <label htmlFor="answer">Введите ответ:</label>
      <br />
      <input
        required
        className={styles.input}
        id="answer"
        name="answer"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.answer}
      />
      <br />
      <Button text={'Ответить'} />
    </form>
  );
};

export default TextInputQuestion;
