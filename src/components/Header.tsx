import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Offset for the sticky header
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>
            <span className={styles.subtitle}>UFC</span>
            <br />TRIVIA CLUB
          </h1>
          <p className={styles.tagline}>Engage Your Mind, Enrich Your Experience</p>
        </div>
      </div>

      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <a onClick={() => scrollToSection('home')} className={styles.navLink}>
            Home
          </a>
          <a onClick={() => scrollToSection('trivia')} className={styles.navLink}>
            Trivia
          </a>
          <a onClick={() => scrollToSection('about')} className={styles.navLink}>
            About
          </a>
          <a onClick={() => scrollToSection('contact')} className={styles.navLink}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
