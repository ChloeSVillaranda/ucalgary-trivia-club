import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import otherStyles from '../styles/OtherSection.module.css';

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
    { name: "Blog", path: "/blog" },
    { name: "Resources", path: "/resources" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Yippee", path: "/yippee" },
    { name: "DailiesBot", path: "/dailiesbot" }
  ];

  return (
    <section id="other" ref={sectionRef} className={`${styles.section} ${otherStyles.otherSection}`}>
      <h2 className={styles.sectionTitle}>Other</h2>
      <p className={otherStyles.description}>Click on each button to be redirected to:</p>
      
      <div className={otherStyles.buttonsContainer}>
        {links.map((link, index) => (
          <Link 
            key={index} 
            href={link.path}
            className={otherStyles.linkButton}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OtherSection;
