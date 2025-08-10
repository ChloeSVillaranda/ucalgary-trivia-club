import React, { useEffect, useRef } from 'react';

import Link from 'next/link';
import otherStyles from '../styles/OtherSection.module.css';
import styles from '../styles/Home.module.css';

const OtherSection: React.FC = () => {
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

  const links = [
    { 
      name: "Blog", 
      path: "/blog", 
      description: "Blog: Click here to see our blog" 
    },
    { 
      name: "Resources", 
      path: "/resources", 
      description: "Resources: Want to improve your trivia game? Click here to look at useful trivia resources!" 
    },
    { 
      name: "Gallery", 
      path: "/gallery", 
      description: "Gallery: Click here to look at photos from our past events" 
    },
    { 
      name: "Events", 
      path: "/events", 
      description: "Events: Click here to view information about our future events" 
    },
    { 
      name: "Yippee", 
      path: "/yippee", 
      description: "Yippee! Click here to be redirected to a student created Trivia web application." 
    },
    { 
      name: "DailiesBot", 
      path: "/dailiesbot", 
      description: "DailiesBot: need a discord bot to track your scores for daily games? Click here to get yourself a bot" 
    }
  ];

  return (
    <section id="other" ref={sectionRef} className={`${styles.section} ${otherStyles.otherSection}`}>
      <h2 className={styles.sectionTitle}>Other</h2>
      <p className={otherStyles.description}>Click on each button to be redirected to:</p>
      
      <div className={otherStyles.buttonsContainer}>
        {links.map((link, index) => (
          <div key={index} className={otherStyles.linkItem}>
            <Link 
              href={link.path}
              className={otherStyles.linkButton}
            >
              {link.name}
            </Link>
            <p className={otherStyles.linkDescription}>{link.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherSection;
