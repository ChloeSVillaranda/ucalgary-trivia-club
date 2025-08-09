import React from 'react';
import styles from '../styles/ParticleBackground.module.css';

const ParticleBackground: React.FC = () => {
  // Pre-generate particles array to avoid regenerating on each render
  const particles = [];
  
  // Generate 50 particles with fixed random positions
  for (let i = 0; i < 50; i++) {
    const size = 2 + Math.floor(Math.random() * 5);
    const left = Math.floor(Math.random() * 100);
    const top = Math.floor(Math.random() * 100);
    const delay = Math.floor(Math.random() * 5);
    const duration = 10 + Math.floor(Math.random() * 20);
    
    particles.push(
      <div 
        key={i}
        className={styles.particle}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      />
    );
  }

  return <div className={styles.particleContainer}>{particles}</div>;
};

export default ParticleBackground;