import React from 'react';
import { withFormik, FormikProps } from 'formik';

import Button from '../Button/Button';
import styles from './CommonQuestions.module.css';

interface FormValues {
    answer: string[],
}

interface QuestionsProps {
    question: string,
    options?: string[],
}


const QuestionRadioForm = (props: QuestionsProps & FormikProps<FormValues>) => {
    const { question, options, handleSubmit, handleChange, values } = props;
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
            <Button text={'Ответить'} />
        </form>
    );
};


interface MyFormProps {
    question: string,
    options?: string[],
}

const MyForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => {
        return {
            answer: [],
        };
    },
    handleSubmit: (values) => {
        console.log(values, 'val');
    },
})(QuestionRadioForm);

const Basic = () => (
    <div>
        <h1>My App</h1>
        <p>This can be anywhere in your application</p>
        <MyForm 
        question={'Как дела?'}
        options={['норм', 'норм, но получше']}
      />
    </div>
);

export default Basic;