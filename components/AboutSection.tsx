import React, { useEffect, useRef } from 'react';

import Image from 'next/image';
import aboutStyles from '../styles/AboutSection.module.css';
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
    <section id="about" ref={sectionRef} className={`${styles.section} ${aboutStyles.aboutSection}`}>
      <h2 className={styles.sectionTitle}>About Us</h2>
      <div className={aboutStyles.aboutContainer}>
        <div className={aboutStyles.aboutContent}>
          <h3>Our Mission</h3>
          <p>
            Founded in 2024 by a group of passionate trivia lovers, and officially recognized as a club in 2025, the University of Calgary Trivia Club 
            (UCTC) is where curiosity meets community. We're here to bring together students who love testing their knowledge, 
            discovering new facts, and celebrating the thrill of trivia in all its forms.
          </p>
          
          <h3>What We Do</h3>
          <p>
            We host fun, engaging trivia events for all skill levels: from casual games where you can relax with friends, to semi-competitive 
            matches for those who like a challenge. Whether you're into pop culture, history, science, or the completely random, 
            you'll be sure to have fun.
          </p>

          <h3>What We Promote</h3>
          <p>
            At UCTC, it's not just about winning... 
            <br></br>
            It's about learning something new, making connections, and enjoying the process.
          </p>
          
          <p className={styles.listHeading}>We promote:</p>
          <ul className={styles.bulletList}>
            <li>A friendly, welcoming environment for all students</li>
            <li>Collaboration and knowledge-sharing</li>
            <li>School spirit with a Dino-sized roar</li>
            <li>Opportunities to grow your skills and confidence</li>
          </ul>
          
        </div>
        <div className={aboutStyles.aboutImage}>
          <Image 
            src="/assets/RexTriviaMascot.png"
            alt="Rex - Trivia Club Mascot" 
            width={300}
            height={300}
            className={aboutStyles.mascotImage}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;