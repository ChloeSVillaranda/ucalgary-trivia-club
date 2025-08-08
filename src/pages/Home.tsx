import React, { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
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
    
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);
  
  return (
    <div className={styles.container}>
      <section ref={aboutRef} className={`${styles.section} ${styles.aboutSection}`}>
        <h2 className={styles.sectionTitle}>About</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>We are a non-competitive trivia club that brings together fans from all disciplines for informal gatherings to celebrate knowledge. Bringing together the worlds of sports and general knowledge, we aim to foster community by cultivating curiosity, promoting lifelong learning, and enriching the fan experience.</p>
          </div>
          <div className={styles.aboutImage}>
            <div className={styles.questionMarkContainer}>
              <span className={`${styles.questionMark} ${styles.q1}`}>?</span>
              <span className={`${styles.questionMark} ${styles.q2}`}>?</span>
              <span className={`${styles.questionMark} ${styles.q3}`}>?</span>
            </div>
          </div>
        </div>
      </section>
      
      <section ref={contactRef} className={`${styles.section} ${styles.contactSection}`}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Name" className={styles.formInput} />
          <input type="email" placeholder="Email" className={styles.formInput} />
          <button type="submit" className={styles.submitButton}>Join Us</button>
        </form>
      </section>
    </div>
  );
};

export default Home;