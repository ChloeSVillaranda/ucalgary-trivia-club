import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} University of Calgary Trivia Club. All rights reserved.</p>
        
        <div className={styles.social}>
          {/* Add social media icons here if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
