import React from 'react';
import { withFormik, FormikProps } from 'formik';

import Button from '../Button/Button';
import styles from './CommonQuestions.module.css';
import { FormValues, QuestionsProps, MyFormProps } from '../../types';

const TextInputQuestion = (props: QuestionsProps & FormikProps<FormValues>) => {
  const { question, handleSubmit, handleChange, values } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h3 className={styles.question}>{question}</h3>

      <label htmlFor="answer">Введите ответ:</label>
      <br />
      <input
        required
        className={styles.input}
        id="answer"
        name="answer"
        type="text"
        onChange={handleChange}
        value={values.answer}
      />
      <br />
      <Button text={'Ответить'} />
    </form>
  );
};

const TextInputQuestionForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: () => {
    return {
      answer: [],
    };
  },
  handleSubmit: (values, { props, resetForm, setSubmitting }) => {
    const { handleSubmit } = props;
    handleSubmit(values);
    resetForm();
    setSubmitting(false);
  },
})(TextInputQuestion);

export default TextInputQuestionForm;
