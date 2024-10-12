import React, { useState, useEffect } from 'react'
import styles from './useCountDownTimer.module.css'

interface Timer {
  component: JSX.Element
  isTimerOver: boolean
}

const useCountDownTimer = (initialMinutes = 0, initialSeconds = 0): Timer => {
  const [isTimerOver, setIsTimerOver] = useState(false)
  const [[m, s], setTime] = useState([initialMinutes, initialSeconds])

  const tick = (): void => {
    if (isTimerOver) return
    if (m === 0 && s === 0) {
      setIsTimerOver(true)
      localStorage.removeItem('timer')
    } else if (s === 0) {
      setTime([m - 1, 59])
    } else {
      setTime([m, s - 1])
    }
  }

  useEffect(() => {
    const savedTimer = localStorage.getItem('timer')
    if (savedTimer != null) {
      const [savedMinutes, savedSeconds] = JSON.parse(savedTimer)
      setTime([savedMinutes, savedSeconds])
    }
  }, [])

  useEffect(() => {
    if (m === 0 && s === 0) {
      setIsTimerOver(true)
      localStorage.removeItem('timer')
    } else {
      const timerID = setInterval(() => { tick() }, 1000)
      return () => { clearInterval(timerID) }
    }
  }, [m, s])

  useEffect(() => {
    localStorage.setItem('timer', JSON.stringify([m, s]))
  }, [m, s])

  const timerComponent = (
    <div key='timer' className={styles.timer}>
      {`${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`}
    </div>
  )

  return { component: timerComponent, isTimerOver }
}

export default useCountDownTimer
