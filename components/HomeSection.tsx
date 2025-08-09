import React, { useRef, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const HomeSection: React.FC = () => {
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
    <section id="home" ref={sectionRef} className={`${styles.section} ${styles.homeSection}`}>
      <div className={styles.heroContent}>
        <h1 className={styles.mainTitle}>UFC Trivia Club</h1>
        <h2 className={styles.subtitle}>University of Calgary</h2>
        <p className={styles.heroParagraph}>
          Test your UFC knowledge, learn interesting facts, and connect with fellow fans.
          Join our community of mixed martial arts enthusiasts!
        </p>
        <div className={styles.actionButtons}>
          <button className={styles.primaryButton}>Start Trivia</button>
          <button className={styles.secondaryButton}>Join Club</button>
        </div>
      </div>
      <div className={styles.heroImage}>
        {/* If you have a hero image, add it here */}
      </div>
    </section>
  );
};

export default HomeSection;