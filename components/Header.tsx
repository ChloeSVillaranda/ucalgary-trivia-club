import React, { useEffect, useState } from 'react';

import styles from '../styles/Header.module.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 700);
    };

    handleScroll();
    
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
            <span className={styles.subtitle}>University of Calgary</span>
            <br />TRIVIA CLUB
          </h1>
          <p className={styles.tagline}>Brainy Nights, Dino Delights</p>
        </div>

        {/* Scroll indicator with multiple chevrons */}
        <div
          className={styles.scrollIndicator}
          onClick={() => scrollToSection('about')}
        >
          <div className={styles.chevronsContainer}>
            <div className={styles.scrollChevron}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </div>
            <div className={styles.scrollChevron}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </div>
            <div className={styles.scrollChevron}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <a onClick={() => scrollToSection('about')} className={styles.navLink}>
            About
          </a>
          <a onClick={() => scrollToSection('membership')} className={styles.navLink}>
            Membership
          </a>
          <a onClick={() => scrollToSection('trivia')} className={styles.navLink}>
            Trivia
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