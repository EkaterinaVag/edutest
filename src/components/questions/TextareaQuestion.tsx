import { FormikProps } from 'formik';
import Button from '../Button/Button';
import styles from './CommonQuestions.module.css';

interface QuestionsProps {
  question: string,
  options?: string[],
  formik: FormikProps<{ answer: string[] }>;
};

const TextareaQuestion = (props: QuestionsProps) => {
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
