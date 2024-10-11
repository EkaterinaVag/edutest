import { useState, useEffect } from 'react';
import styles from './useCountDownTimer.module.css'

const useCountDownTimer = (minutes = 0, seconds = 0) => {
  const [isOver, setIsOver] = useState(false);
  const [[m, s], setTime] = useState([minutes, seconds]);

  const tick = () => {
    if (isOver) return;
    if (m === 0 && s === 0) {
      setIsOver(true);
      localStorage.removeItem('timer');
    } else if (s === 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  useEffect(() => {
    localStorage.setItem('timer', JSON.stringify([m, s]));
  }, [m, s]);

  useEffect(() => {
    const savedTimer = localStorage.getItem('timer');
    if (savedTimer) {
      const [savedMinutes, savedSeconds] = JSON.parse(savedTimer);
      setTime([savedMinutes, savedSeconds]);
    }
  }, [])

  return [
    <div className={styles.timer}>{`${m.toString().padStart(2, '0')} : ${s
      .toString()
      .padStart(2, '0')}`}</div>,
    isOver,
  ];
};

export default useCountDownTimer;
