import styles from './Button.module.css';

interface ButtonProps {
  text: string,
}

const Button = (props: ButtonProps) => {
  const { text } = props;
  return (
    <button type="submit" className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
