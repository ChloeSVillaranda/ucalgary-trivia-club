import React, { useRef, useEffect, useState } from 'react';
import styles from './Home.module.css';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual API call
    try {
      // Fake API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className={`${styles.section} ${styles.contactSection}`}>
      <h2 className={styles.sectionTitle}>Contact Us</h2>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h3>Get In Touch</h3>
          <p>Have questions about our trivia nights or want to join the club? Reach out to us!</p>
          
          <div className={styles.contactDetail}>
            <i className={styles.icon}>📧</i>
            <p>ufctriviaclub@ucalgary.ca</p>
          </div>
          
          <div className={styles.contactDetail}>
            <i className={styles.icon}>📱</i>
            <p>+1 (403) 555-1234</p>
          </div>
          
          <div className={styles.contactDetail}>
            <i className={styles.icon}>📍</i>
            <p>2500 University Drive NW, Calgary, AB</p>
          </div>
          
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <i className={styles.icon}>📘</i> {/* Facebook */}
            </a>
            <a href="#" className={styles.socialLink}>
              <i className={styles.icon}>📷</i> {/* Instagram */}
            </a>
            <a href="#" className={styles.socialLink}>
              <i className={styles.icon}>🐦</i> {/* Twitter */}
            </a>
          </div>
        </div>
        
        <div className={styles.contactForm}>
          <h3>Send us a Message</h3>
          
          {submitMessage && (
            <div className={styles.formMessage}>
              {submitMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;