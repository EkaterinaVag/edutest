import { FormikProps } from 'formik';
import Button from '../Button/Button';
import styles from './CommonQuestions.module.css';

interface QuestionsProps {
  question: string,
  options?: string[],
  formik: FormikProps<{ answer: string[] }>;
}

const RadioQuestion = (props: QuestionsProps) => {
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
      <Button text={'Ответить'} />
    </form>
  );
};

export default RadioQuestion;
