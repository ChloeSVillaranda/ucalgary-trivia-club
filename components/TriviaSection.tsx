import React, { useEffect, useRef, useState } from 'react';

import styles from '../styles/Home.module.css';
import triviaStyles from '../styles/TriviaSection.module.css';

interface Question {
  questionText: string;
  answerOptions: {
    answerText: string;
    isCorrect: boolean;
  }[];
}

const TriviaSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Change activeCard to activeCards array to allow multiple active quizzes
  const [activeCards, setActiveCards] = useState([false, false, false]);
  // State for current question index for each card
  const [currentQuestions, setCurrentQuestions] = useState([0, 0, 0]);
  // Track selected answers for each card
  const [selectedAnswers, setSelectedAnswers] = useState<Array<number | null>>([null, null, null]);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Quiz data for each card
  const quizData = [
    // Fighter Trivia
    [
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
      // Add more questions as needed
    ],
    // Event Trivia
    [
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
      // Add more questions as needed
    ],
    // UFC History
    [
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
      // Add more questions as needed
    ]
  ];

  const handleStartQuiz = (cardIndex: number) => {
    const newActiveCards = [...activeCards];
    newActiveCards[cardIndex] = true;
    setActiveCards(newActiveCards);
    
    // Reset answer for this card
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[cardIndex] = null;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleAnswerClick = (cardIndex: number, answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[cardIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextQuestion = (cardIndex: number) => {
    const nextQuestion = currentQuestions[cardIndex] + 1;
    
    if (nextQuestion < quizData[cardIndex].length) {
      // Move to next question for this card only
      const newCurrentQuestions = [...currentQuestions];
      newCurrentQuestions[cardIndex] = nextQuestion;
      setCurrentQuestions(newCurrentQuestions);
      
      // Reset answer for this card
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[cardIndex] = null;
      setSelectedAnswers(newSelectedAnswers);
    } else {
      // End of questions, reset this card
      const newActiveCards = [...activeCards];
      newActiveCards[cardIndex] = false;
      setActiveCards(newActiveCards);
      
      const newCurrentQuestions = [...currentQuestions];
      newCurrentQuestions[cardIndex] = 0;
      setCurrentQuestions(newCurrentQuestions);
    }
  };

  const handleResetQuiz = (cardIndex: number) => {
    // Reset just this card
    const newActiveCards = [...activeCards];
    newActiveCards[cardIndex] = false;
    setActiveCards(newActiveCards);
    
    const newCurrentQuestions = [...currentQuestions];
    newCurrentQuestions[cardIndex] = 0;
    setCurrentQuestions(newCurrentQuestions);
    
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[cardIndex] = null;
    setSelectedAnswers(newSelectedAnswers);
  };

  const renderCardContent = (cardIndex: number, title: string, description: string) => {
    if (activeCards[cardIndex]) {
      // Show the quiz
      const currentQuestion = quizData[cardIndex][currentQuestions[cardIndex]];
      const isAnswerSelected = selectedAnswers[cardIndex] !== null;
      
      return (
        <div className={`${triviaStyles.quizContainer} ${triviaStyles.fadeIn}`}>
          <h3>{title}</h3>
          <p className={triviaStyles.questionCount}>Question {currentQuestions[cardIndex] + 1}/{quizData[cardIndex].length}</p>
          <p className={triviaStyles.questionText}>{currentQuestion.questionText}</p>
          
          <div className={triviaStyles.answerGrid}>
            {currentQuestion.answerOptions.map((answer, answerIndex) => {
              let answerClass = triviaStyles.answerOption;
              
              if (isAnswerSelected) {
                if (answer.isCorrect) {
                  answerClass = `${answerClass} ${triviaStyles.correctAnswer}`;
                } else if (selectedAnswers[cardIndex] === answerIndex && !answer.isCorrect) {
                  answerClass = `${answerClass} ${triviaStyles.wrongAnswer}`;
                }
              }
              
              return (
                <button 
                  key={answerIndex}
                  className={answerClass}
                  onClick={() => !isAnswerSelected && handleAnswerClick(cardIndex, answerIndex)}
                  disabled={isAnswerSelected}
                >
                  {answer.answerText}
                </button>
              );
            })}
          </div>
          
          {isAnswerSelected && (
            <div className={`${triviaStyles.feedbackContainer} ${triviaStyles.fadeIn}`}>
              <p className={triviaStyles.feedback}>
                {currentQuestion.answerOptions[selectedAnswers[cardIndex] as number].isCorrect 
                  ? 'Correct!' 
                  : 'Incorrect. The correct answer is: ' + 
                    currentQuestion.answerOptions.find(a => a.isCorrect)?.answerText
                }
              </p>
              
              {currentQuestions[cardIndex] < quizData[cardIndex].length - 1 ? (
                <button 
                  className={triviaStyles.nextButton}
                  onClick={() => handleNextQuestion(cardIndex)}
                >
                  Next Question
                </button>
              ) : (
                <button 
                  className={triviaStyles.nextButton}
                  onClick={() => handleResetQuiz(cardIndex)}
                >
                  Finish Quiz
                </button>
              )}
            </div>
          )}
        </div>
      );
    }
    
    // Show the intro
    return (
      <div className={`${triviaStyles.introContainer} ${triviaStyles.fadeIn}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button 
          className={triviaStyles.triviaButton}
          onClick={() => handleStartQuiz(cardIndex)}
        >
          Start
        </button>
      </div>
    );
  };

  return (
    <section id="trivia" ref={sectionRef} className={`${styles.section} ${triviaStyles.triviaSection}`}>
      <h2 className={styles.sectionTitle}>Trivia</h2>
      <div className={triviaStyles.triviaContainer}>
        <div className={triviaStyles.triviaCard}>
          {renderCardContent(
            0, 
            "Fighter Trivia", 
            "Test your knowledge about UFC fighters, their records, and achievements."
          )}
        </div>
        <div className={triviaStyles.triviaCard}>
          {renderCardContent(
            1, 
            "Event Trivia", 
            "Challenge yourself with questions about historic UFC events and moments."
          )}
        </div>
        <div className={triviaStyles.triviaCard}>
          {renderCardContent(
            2, 
            "UFC History", 
            "How well do you know the history and evolution of the UFC?"
          )}
        </div>
      </div>
    </section>
  );
};

export default TriviaSection;