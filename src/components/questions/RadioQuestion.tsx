import React from 'react';
import { withFormik, FormikProps } from 'formik';

import Button from '../Button/Button';
import styles from './CommonQuestions.module.css';
import { FormValues, QuestionsProps, MyFormProps } from '../../types';

const RadioQuestion = (props: QuestionsProps & FormikProps<FormValues>) => {
    const { question, options, handleSubmit, handleChange, values, errors } = props;
    return (
        <form onSubmit={handleSubmit}>
            <h3 className={styles.question}>{question}</h3>
            <div className={styles.options}>
                {options?.map((option) => (
                    <>
                        <label className={styles.option} key={option}>
                            <input
                                type="radio"
                                name="answer"
                                value={option}
                                checked={values.answer.includes(option)}
                                onChange={handleChange}
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

const RadioQuestionForm = withFormik<MyFormProps, FormValues>({
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
})(RadioQuestion);

export default RadioQuestionForm;
