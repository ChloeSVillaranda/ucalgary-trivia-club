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
    // Small delay to ensure the DOM is fully rendered
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = 70; // Height of the sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <div className={styles.logoContainer}>
            <img 
              src="/assets/UniversityOfCalgaryLogoTransparent.png" 
              alt="University of Calgary Trivia Club Logo" 
              className={styles.clubLogo}
            />
          </div>
          <h1 className={styles.title}>
            <span className={styles.subtitle}>University of Calgary</span>
            <br />TRIVIA CLUB
          </h1>
          <p>UCTC</p>
          <p>The only club on campus dedicated to trivia.</p>
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
          <a onClick={() => scrollToSection('other')} className={styles.navLink}>
            Other
          </a>
          <a onClick={() => scrollToSection('faq')} className={styles.navLink}>
            FAQ
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