import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2024-{new Date().getFullYear()} University of Calgary Trivia Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
