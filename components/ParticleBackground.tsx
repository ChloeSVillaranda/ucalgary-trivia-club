import React, { useEffect, useState } from 'react';

import styles from '../styles/ParticleBackground.module.css';

const ParticleBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  // Only run on client side to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  // Generate stars with the particle.js stars preset look
  const particles = [];
  const particleCount = 80;
  
  for (let i = 0; i < particleCount; i++) {
    // Create more varied sizes with smaller average for star-like appearance
    const size = 1 + Math.random() * 2;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = 15 + Math.random() * 30; // Slower movement for stars
    const opacity = 0.1 + Math.random() * 0.7; // Varied opacity
    
    particles.push(
      <div 
        key={i}
        className={styles.particle}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity: opacity,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }}
      />
    );
  }

  return (
    <div className={styles.particleContainer}>
      {particles}
      <div className={styles.connectingLines}></div> {/* Background element for the star effect */}
    </div>
  );
};

export default ParticleBackground;