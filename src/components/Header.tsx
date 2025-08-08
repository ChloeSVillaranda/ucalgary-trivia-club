import Link from 'next/link';
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
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/leaderboard" className={styles.navLink}>
            Leaderboard
          </Link>
          <Link href="/trivia" className={styles.navLink}>
            Trivia
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
