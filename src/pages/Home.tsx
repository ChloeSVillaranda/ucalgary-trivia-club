import React, { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    trivia: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null)
  };
  
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
    
    // Observe all section refs
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    
    return () => {
      // Cleanup observer
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);
  
  return (
    <div className={styles.container}>
      <section id="home" ref={sectionRefs.home} className={`${styles.section} ${styles.homeSection}`}>
        <h2 className={styles.sectionTitle}>Welcome</h2>
        <div className={styles.content}>
          <p>Welcome to the UFC Trivia Club, where knowledge meets passion. Test your UFC knowledge, learn interesting facts, and connect with other fans!</p>
          <div className={styles.actionButtons}>
            <button className={styles.primaryButton}>Start Trivia</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </div>
      </section>
      
      <section id="trivia" ref={sectionRefs.trivia} className={`${styles.section} ${styles.triviaSection}`}>
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
      
      <section id="about" ref={sectionRefs.about} className={`${styles.section} ${styles.aboutSection}`}>
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
      
      <section id="contact" ref={sectionRefs.contact} className={`${styles.section} ${styles.contactSection}`}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Name" className={styles.formInput} />
          <input type="email" placeholder="Email" className={styles.formInput} />
          <textarea placeholder="Message" className={styles.formTextarea}></textarea>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;