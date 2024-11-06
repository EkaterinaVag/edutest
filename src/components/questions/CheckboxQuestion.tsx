import React from 'react';
import { withFormik, FormikProps } from 'formik';

import Button from '../Button/Button';
import styles from './CommonQuestions.module.css';
import { FormValues, QuestionsProps, MyFormProps } from '../../types';

const CheckboxQuestion = (props: QuestionsProps & FormikProps<FormValues>) => {
  const { question, options, handleSubmit, values, errors, setFieldValue } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h3 className={styles.question}>{question}</h3>
      <div className={styles.options}>
        {options?.map((option) => (
          <>
            <label className={styles.option} key={option}>
              <input
                type="checkbox"
                name="answer"
                value={option}
                checked={values.answer.includes(option)}
                onChange={(e) => {
                  if (e.target.checked) {
                    if (typeof values.answer === 'string') {
                      setFieldValue('answer', [values.answer, option]);
                    } else {
                      setFieldValue('answer', [...values.answer, option]);
                    }
                  } else {
                    if (typeof values.answer === 'string') {
                      if (values.answer === option) {
                        setFieldValue('answer', []);
                      }
                    } else {
                      setFieldValue('answer', values.answer.filter((item) => item !== option));
                    }
                  }
                }}
              />
              {option}
            </label>
            <br />
          </>
        ))}
      </div>
      {errors.answer && (
        <div className={styles.error}>
          {errors.answer}
        </div>
      )}
      <Button text={'Ответить'} />
    </form>
  );
};

const CheckboxQuestionForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: () => {
    return {
      answer: [],
    };
  },
  validate: (values) => {
    const errors: { answer?: string } = {};
    if (values.answer.length === 0) {
        errors.answer = 'Пожалуйста, выберите ответ';
    }
    return errors;
},
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    const { handleSubmit } = props;
    handleSubmit(values);
    resetForm();
    setSubmitting(false);
  },
})(CheckboxQuestion);

export default CheckboxQuestionForm;
