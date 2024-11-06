import React from 'react';
import { withFormik, FormikProps } from 'formik';

import Button from '../Button/Button';
import styles from './CommonQuestions.module.css';
import { FormValues, QuestionsProps, MyFormProps } from '../../types';

const TextareaQuestion = (props: QuestionsProps & FormikProps<FormValues>) => {
  const { question, handleSubmit, handleChange, values } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h3 className={styles.question}>{question}</h3>

      <label htmlFor="answer">Введите развернутый ответ:</label>
      <br />
      <textarea
        required
        className={styles.textarea}
        id="answer"
        name="answer"
        onChange={handleChange}
        value={values.answer}
      />
      <br />
      <Button text={'Ответить'} />
    </form>
  );
};

const TextareaQuestionForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: () => {
    return {
      answer: [],
    };
  },
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    const { handleSubmit } = props;
    handleSubmit(values);
    resetForm();
    setSubmitting(false);
  },
})(TextareaQuestion);

export default TextareaQuestionForm;
