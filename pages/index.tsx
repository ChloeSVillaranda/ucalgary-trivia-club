import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import FAQ from '../components/FAQ';
import MembershipSection from '../components/MembershipSection';
import ParticleBackground from '../components/ParticleBackground';
import React from 'react';
import TriviaSection from '../components/TriviaSection';
import particleStyles from '../styles/ParticleBackground.module.css';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <div className="content-container">
        <div className={particleStyles.withParticles}>
          <AboutSection />
          <MembershipSection />
          <TriviaSection />
          <FAQ />
          <ContactSection />
        </div>
      </div>
    </>
  );
}