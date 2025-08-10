import React, { useState } from 'react';

import Link from 'next/link';
import styles from '../../styles/Trivia.module.css';

const FighterTrivia: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  
  // Fighter trivia questions
  const questions = [
    {
      questionText: 'Who was the first UFC Heavyweight Champion?',
      answerOptions: [
        { answerText: 'Mark Coleman', isCorrect: true },
        { answerText: 'Randy Couture', isCorrect: false },
        { answerText: 'Ken Shamrock', isCorrect: false },
        { answerText: 'Royce Gracie', isCorrect: false },
      ],
    },
    {
      questionText: 'Which fighter has the most knockouts in UFC history?',
      answerOptions: [
        { answerText: 'Derrick Lewis', isCorrect: false },
        { answerText: 'Vitor Belfort', isCorrect: false },
        { answerText: 'Anderson Silva', isCorrect: false },
        { answerText: 'Matt Brown', isCorrect: true },
      ],
    },
    {
      questionText: 'Who is the youngest champion in UFC history?',
      answerOptions: [
        { answerText: 'Jon Jones', isCorrect: true },
        { answerText: 'Alistair Overeem', isCorrect: false },
        { answerText: 'Conor McGregor', isCorrect: false },
        { answerText: 'Georges St-Pierre', isCorrect: false },
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
      <h1 className={styles.triviaTitle}>UFC Fighter Trivia Challenge</h1>
      
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

export default FighterTrivia;
