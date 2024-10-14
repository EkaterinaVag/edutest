import React from 'react';
import Button from '../Button/Button';
import styles from './CommonQuestions.module.css';
import { type QuestionsProps } from '../../types';

const RadioQuestion = (props: QuestionsProps): JSX.Element => {
  const { question, options, formik } = props;
  return (
    <form onSubmit={formik.handleSubmit}>
      <h3 className={styles.question}>{question}</h3>
      <div className={styles.options}>
        {options?.map((option) => (
          <>
            <label className={styles.option} key={option}>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={formik.values.answer.includes(option)}
                onChange={formik.handleChange}
              />
              {option}
            </label>
            <br />
          </>
        ))}
      </div>
      {formik.errors.answer && (
        <div className={styles.error}>
          {formik.errors.answer}
        </div>
      )}
      <Button text={'Ответить'} />
    </form>
  );
};

export default RadioQuestion;
