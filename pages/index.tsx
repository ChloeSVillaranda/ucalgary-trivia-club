import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import HomeSection from '../components/HomeSection';
import MembershipSection from '../components/MembershipSection';
import React from 'react';
import TriviaSection from '../components/TriviaSection';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeSection />
      <AboutSection />
      <MembershipSection />
      <TriviaSection />
      <ContactSection />
    </div>
  );
}