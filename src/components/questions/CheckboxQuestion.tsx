import React from 'react'
import Button from '../Button/Button'
import styles from './CommonQuestions.module.css'
import { type QuestionsProps } from '../../types'

const CheckboxQuestion = (props: QuestionsProps): JSX.Element => {
  const { question, options, formik } = props
  return (
    <form onSubmit={formik.handleSubmit}>
      <h3 className={styles.question}>{question}</h3>
      <div className={styles.options}>
        {options?.map((option) => (
          <>
            <label className={styles.option} key={option}>
              <input
                type="checkbox"
                name="answer"
                value={option}
                checked={formik.values.answer.includes(option)}
                onChange={async (e) => {
                  if (e.target.checked) {
                    await formik.setFieldValue('answer', [
                      ...formik.values.answer,
                      option
                    ])
                  } else {
                    await formik.setFieldValue(
                      'answer',
                      formik.values.answer.filter((item) => item !== option)
                    )
                  }
                }}
              />
              {option}
            </label>
            <br />
          </>
        ))}
      </div>
      <Button text={'Ответить'} />
    </form>
  )
}

export default CheckboxQuestion
