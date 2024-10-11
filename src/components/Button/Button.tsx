import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  text: string
  onClick?: any
}

const Button = (props: ButtonProps): JSX.Element => {
  const { text, onClick } = props
  return (
    <button onClick={onClick} type="submit" className={styles.button}>
      {text}
    </button>
  )
}

export default Button
