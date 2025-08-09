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
        <h1 className={styles.mainTitle}>University of Calgary Trivia Club</h1>
        <h2 className={styles.subtitle}>UCTC</h2>
        <p className={styles.heroParagraph}>
          The only club on campus dedicated to Trivia.
        </p>
      </div>
      <div className={styles.heroImage}>
        {/* If you have a hero image, add it here */}
      </div>
    </section>
  );
};

export default HomeSection;