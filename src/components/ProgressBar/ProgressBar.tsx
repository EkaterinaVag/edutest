import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  progress: number;
  totalQuestions: number;
  currentQuestionIndex: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { progress, totalQuestions, currentQuestionIndex } = props;
  const bars = [];
  for (let i = 0; i < totalQuestions; i++) {
    bars.push(
      <div
        key={i}
        className={`${styles.progress} ${i < progress ? styles.filled : ''} 
        ${i === currentQuestionIndex ? styles.current : ''}`}
      />
    );
  }
  return <div className={styles.container}>{bars}</div>;
};

export default ProgressBar;
