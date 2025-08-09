import React from 'react';
import HomeSection from '../components/HomeSection';
import TriviaSection from '../components/TriviaSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeSection />
      <AboutSection />
      <TriviaSection />
      <ContactSection />
    </div>
  );
}