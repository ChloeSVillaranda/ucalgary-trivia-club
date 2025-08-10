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
  // Track whether each quiz is completed
  const [quizCompleted, setQuizCompleted] = useState([false, false, false]);
  // Track the score for each quiz
  const [quizScores, setQuizScores] = useState([0, 0, 0]);
  
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
    // Calgary Trivia
    [
      {
        questionText: 'In what year was the city of Calgary founded?',
        answerOptions: [
          { answerText: '1875', isCorrect: true },
          { answerText: '1883', isCorrect: false },
          { answerText: '1905', isCorrect: false },
          { answerText: '1914', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the name of Calgary\'s annual rodeo event?',
        answerOptions: [
          { answerText: 'Calgary Round-Up', isCorrect: false },
          { answerText: 'Calgary Stampede', isCorrect: true },
          { answerText: 'Alberta Rodeo', isCorrect: false },
          { answerText: 'Prairie Festival', isCorrect: false },
        ],
      },
    ],
    // UCalgary Trivia
    [
      {
        questionText: 'In what year was the University of Calgary established as an autonomous institution?',
        answerOptions: [
          { answerText: '1945', isCorrect: false },
          { answerText: '1966', isCorrect: true },
          { answerText: '1972', isCorrect: false },
          { answerText: '1988', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the name of UCalgary\'s mascot?',
        answerOptions: [
          { answerText: 'Rex the Tyrannosaurus', isCorrect: false },
          { answerText: 'Dexter the Dino', isCorrect: false },
          { answerText: 'Rex the Dinosaur', isCorrect: true },
          { answerText: 'Cal the Dinosaur', isCorrect: false },
        ],
      },
    ],
    // UCalgary Trivia Club Trivia
    [
      {
        questionText: 'When was the UCalgary Trivia Club founded?',
        answerOptions: [
          { answerText: '2022', isCorrect: false },
          { answerText: '2023', isCorrect: false },
          { answerText: '2024', isCorrect: true },
          { answerText: '2025', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the Trivia Club\'s slogan?',
        answerOptions: [
          { answerText: 'Knowledge is Power', isCorrect: false },
          { answerText: 'Brainy Nights, Dino Delights', isCorrect: true },
          { answerText: 'Question Everything', isCorrect: false },
          { answerText: 'Trivia Champions', isCorrect: false },
        ],
      },
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
    
    // Reset quiz completion status
    const newQuizCompleted = [...quizCompleted];
    newQuizCompleted[cardIndex] = false;
    setQuizCompleted(newQuizCompleted);
    
    // Reset score
    const newQuizScores = [...quizScores];
    newQuizScores[cardIndex] = 0;
    setQuizScores(newQuizScores);
  };

  const handleAnswerClick = (cardIndex: number, answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[cardIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
    
    // Update score if answer is correct
    if (quizData[cardIndex][currentQuestions[cardIndex]].answerOptions[answerIndex].isCorrect) {
      const newQuizScores = [...quizScores];
      newQuizScores[cardIndex] += 1;
      setQuizScores(newQuizScores);
    }
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
      // End of questions, show the completion screen
      const newQuizCompleted = [...quizCompleted];
      newQuizCompleted[cardIndex] = true;
      setQuizCompleted(newQuizCompleted);
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
    
    // Reset completed state
    const newQuizCompleted = [...quizCompleted];
    newQuizCompleted[cardIndex] = false;
    setQuizCompleted(newQuizCompleted);
  };

  const renderCardContent = (cardIndex: number, title: string, description: string) => {
    // If quiz is completed, show the summary screen
    if (quizCompleted[cardIndex]) {
      return (
        <div className={`${triviaStyles.completionContainer} ${triviaStyles.fadeIn}`}>
          <h3>{title} - Quiz Completed!</h3>
          <p className={triviaStyles.scoreText}>
            Your Score: {quizScores[cardIndex]} out of {quizData[cardIndex].length}
          </p>
          {quizScores[cardIndex] === quizData[cardIndex].length ? (
            <p className={triviaStyles.perfectScore}>Perfect Score! Great job!</p>
          ) : (
            <p>Good effort!</p>
          )}
          <button 
            className={triviaStyles.triviaButton}
            onClick={() => handleResetQuiz(cardIndex)}
          >
            Back to Trivia Menu
          </button>
        </div>
      );
    }
    
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
              
              <button 
                className={triviaStyles.nextButton}
                onClick={() => handleNextQuestion(cardIndex)}
              >
                Next Question
              </button>
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
            "Calgary Trivia", 
            "Test your knowledge about our vibrant city of Calgary."
          )}
        </div>
        <div className={triviaStyles.triviaCard}>
          {renderCardContent(
            1, 
            "UCalgary Trivia", 
            "How much do you know about the University of Calgary?"
          )}
        </div>
        <div className={triviaStyles.triviaCard}>
          {renderCardContent(
            2, 
            "Trivia Club Trivia", 
            "See if you know all about the UCalgary Trivia Club!"
          )}
        </div>
      </div>
    </section>
  );
};

export default TriviaSection;