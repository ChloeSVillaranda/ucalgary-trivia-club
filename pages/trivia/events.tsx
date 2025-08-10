import React, { useState } from 'react';

import Link from 'next/link';
import styles from '../../styles/Trivia.module.css';

const EventsTrivia: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  
  // Event trivia questions
  const questions = [
    {
      questionText: 'What year was the first UFC event held?',
      answerOptions: [
        { answerText: '1991', isCorrect: false },
        { answerText: '1992', isCorrect: false },
        { answerText: '1993', isCorrect: true },
        { answerText: '1995', isCorrect: false },
      ],
    },
    {
      questionText: 'Which venue has hosted the most UFC events?',
      answerOptions: [
        { answerText: 'T-Mobile Arena', isCorrect: false },
        { answerText: 'MGM Grand Garden Arena', isCorrect: false },
        { answerText: 'UFC Apex', isCorrect: true },
        { answerText: 'Madison Square Garden', isCorrect: false },
      ],
    },
    {
      questionText: 'Which UFC event had the highest attendance?',
      answerOptions: [
        { answerText: 'UFC 129', isCorrect: true },
        { answerText: 'UFC 205', isCorrect: false },
        { answerText: 'UFC 243', isCorrect: false },
        { answerText: 'UFC 193', isCorrect: false },
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
      <h1 className={styles.triviaTitle}>UFC Events Trivia Challenge</h1>
      
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

export default EventsTrivia;
