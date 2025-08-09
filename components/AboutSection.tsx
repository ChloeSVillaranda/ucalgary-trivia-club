import React, { useRef, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const AboutSection: React.FC = () => {
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
    <section id="about" ref={sectionRef} className={`${styles.section} ${styles.aboutSection}`}>
      <h2 className={styles.sectionTitle}>About Us</h2>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <h3>Our Mission</h3>
          <p>
            Founded in 2024 by passionate UFC enthusiasts at the University of Calgary, 
            our club aims to bring together fans of mixed martial arts to test their knowledge, 
            learn from each other, and celebrate the sport we love.
          </p>
          
          <h3>What We Do</h3>
          <p>
            We host weekly trivia nights, organize watch parties for major UFC events, 
            and create a community where discussions about fights, fighters, and the 
            history of the sport are encouraged and celebrated.
          </p>

          <h3>Join Our Community</h3>
          <p>
            Whether you're a casual fan or a hardcore enthusiast who knows every champion 
            in UFC history, there's a place for you in our community. We welcome members of 
            all knowledge levels who share our passion for the sport.
          </p>
        </div>
        <div className={styles.aboutImage}>
          {/* If you have an image, add it here */}
          <div className={styles.imagePlaceholder}>
            <p>Club Photo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;