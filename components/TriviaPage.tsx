import React, { useState } from 'react';
import styles from '../styles/Trivia.module.css';

const TriviaPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  
  // Sample trivia questions - replace with your actual UFC trivia
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
      questionText: 'What year was the first UFC event held?',
      answerOptions: [
        { answerText: '1991', isCorrect: false },
        { answerText: '1992', isCorrect: false },
        { answerText: '1993', isCorrect: true },
        { answerText: '1995', isCorrect: false },
      ],
    },
    {
      questionText: 'Who holds the record for most title defenses in UFC history?',
      answerOptions: [
        { answerText: 'Jon Jones', isCorrect: false },
        { answerText: 'Demetrious Johnson', isCorrect: true },
        { answerText: 'Anderson Silva', isCorrect: false },
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
      <h1 className={styles.triviaTitle}>UFC Trivia Challenge</h1>
      
      {showScore ? (
        <div className={styles.scoreSection}>
          <h2>You scored {score} out of {questions.length}</h2>
          <button className={styles.restartButton} onClick={resetQuiz}>
            Try Again
          </button>
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

export default TriviaPage;
