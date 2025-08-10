import React, { useEffect, useRef, useState } from 'react';

import styles from '../styles/ParticleBackground.module.css';

const ParticleBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    setMounted(true);
    
    if (typeof window !== 'undefined') {
      // Canvas setup and particle animation will be handled here
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Set canvas dimensions to match window
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      
      // Particle properties
      const particleCount = 80;
      const particles: Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        radius: number;
      }> = [];
      
      // Create particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: 2 + Math.random() * 2,
        });
      }
      
      // Animation function
      const animate = () => {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          
          // Move particles
          p.x += p.vx;
          p.y += p.vy;
          
          // Bounce off edges
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 215, 0, 0.7)'; // Changed to yellow color
          ctx.fill();
          
          // Draw connections
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Only draw lines if particles are close enough
            const maxDistance = 150;
            if (distance < maxDistance) {
              // Set opacity based on distance
              const opacity = 1 - (distance / maxDistance);
              
              // Draw line with yellow color
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(255, 215, 0, ${opacity * 0.5})`; // Yellow color with opacity
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
        
        requestAnimationFrame(animate);
      };
      
      // Start animation
      animate();
      
      // Clean up
      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }
  }, [mounted]);
  
  if (!mounted) return null;
  
  return (
    <div className={styles.particleContainer}>
      <canvas ref={canvasRef} className={styles.particleCanvas}></canvas>
    </div>
  );
};

export default ParticleBackground;