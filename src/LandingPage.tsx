import React from 'react';
import styles from './components/Home.module.css';
import HomeSection from './components/HomeSection';
import TriviaSection from './components/TriviaSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <HomeSection />
      <TriviaSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;