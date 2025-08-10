import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import FAQ from '../components/FAQ';
import Head from 'next/head';
import MembershipSection from '../components/MembershipSection';
import OtherSection from '../components/OtherSection';
import ParticleBackground from '../components/ParticleBackground';
import React from 'react';
import TriviaSection from '../components/TriviaSection';
import particleStyles from '../styles/ParticleBackground.module.css';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Your Site Titl</title>
        <meta name="description" content="Your site description" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <ParticleBackground />
      <main className={styles.main}>
        <div className="content-container">
          <div className={particleStyles.withParticles}>
            <AboutSection />
            <MembershipSection />
            <TriviaSection />
            <OtherSection />
            <FAQ />
            <ContactSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;