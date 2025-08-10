import React, { useState } from 'react';

import Link from 'next/link';
import styles from '../../styles/Trivia.module.css';

const HistoryTrivia: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  
  // UFC history trivia questions
  const questions = [
    {
      questionText: 'Who founded the UFC?',
      answerOptions: [
        { answerText: 'Dana White', isCorrect: false },
        { answerText: 'Art Davie', isCorrect: true },
        { answerText: 'Lorenzo Fertitta', isCorrect: false },
        { answerText: 'Joe Rogan', isCorrect: false },
      ],
    },
    {
      questionText: 'In what year did the UFC introduce weight classes?',
      answerOptions: [
        { answerText: '1995', isCorrect: false },
        { answerText: '1997', isCorrect: true },
        { answerText: '1999', isCorrect: false },
        { answerText: '2001', isCorrect: false },
      ],
    },
    {
      questionText: 'When did the UFC first air on FOX?',
      answerOptions: [
        { answerText: '2009', isCorrect: false },
        { answerText: '2010', isCorrect: false },
        { answerText: '2011', isCorrect: true },
        { answerText: '2013', isCorrect: false },
      ],
    },
  ];

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className={styles.triviaContainer}>
      <h1 className={styles.triviaTitle}>UFC History Trivia Challenge</h1>
      
      {showScore ? (
        <div className={styles.scoreSection}>
          <h2>You scored {score} out of {questions.length}</h2>
          <div className={styles.buttonGroup}>
            <button className={styles.restartButton} onClick={resetQuiz}>
              Try Again
            </button>
            <Link href="/">
              <button className={styles.homeButton}>
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.questionSection}>
          <div className={styles.questionCount}>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className={styles.questionText}>
            {questions[currentQuestion].questionText}
          </div>
          <div className={styles.answerSection}>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button 
                key={index} 
                className={styles.answerButton}
                onClick={() => handleAnswerClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryTrivia;
