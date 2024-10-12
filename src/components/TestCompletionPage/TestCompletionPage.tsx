import React from 'react'
import Button from '../Button/Button'
import styles from './TestCompletionPage.module.css'

interface TestCompletionProps {
  isTimerOver: boolean
}

const TestCompletionPage = (props: TestCompletionProps): JSX.Element => {
  const { isTimerOver } = props
  localStorage.removeItem('currentQuestion')
  localStorage.removeItem('timer')
  return (
    <div className={styles.container}>
      <h2>
        {isTimerOver
          ? 'Время теста истекло!'
          : 'Тестирование успешно завершено!'}
      </h2>
      <p className={styles.text}>Вы можете ознакомиться с результатами</p>
      <Button text={'Просмотреть результаты'} onClick={(): void => { alert('Вы молодец!') }}/>
    </div>
  )
}

export default TestCompletionPage
