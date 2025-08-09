import React, { useRef, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const TriviaSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section id="trivia" ref={sectionRef} className={`${styles.section} ${styles.triviaSection}`}>
      <h2 className={styles.sectionTitle}>Trivia</h2>
      <div className={styles.triviaContainer}>
        <div className={styles.triviaCard}>
          <h3>Fighter Trivia</h3>
          <p>Test your knowledge about UFC fighters, their records, and achievements.</p>
          <button className={styles.triviaButton}>Start</button>
        </div>
        <div className={styles.triviaCard}>
          <h3>Event Trivia</h3>
          <p>Challenge yourself with questions about historic UFC events and moments.</p>
          <button className={styles.triviaButton}>Start</button>
        </div>
        <div className={styles.triviaCard}>
          <h3>UFC History</h3>
          <p>How well do you know the history and evolution of the UFC?</p>
          <button className={styles.triviaButton}>Start</button>
        </div>
      </div>
    </section>
  );
};

export default TriviaSection;