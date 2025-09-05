import React, { useEffect, useRef, useState } from 'react';
import { faDiscord, faGithub, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactStyles from '../styles/ContactSection.module.css';
import emailjs from 'emailjs-com';
import styles from '../styles/Home.module.css';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    
    try {
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const CONTACT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID as string;
      const AUTO_REPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID as string;
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;


      // 1. Send to Club email
      await emailjs.send(
        SERVICE_ID,
        CONTACT_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      // 2. Send auto-reply to sender
      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
        
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className={`${styles.section} ${contactStyles.contactSection}`}>
      <h2 className={styles.sectionTitle}>Contact Us</h2>
      
      <div className={contactStyles.contactContainer}>
        <div className={contactStyles.contactInfo}>
          <h3>Get In Touch</h3>
          <p>Still have questions about our club or want to join? Reach out to us!</p>
          
          <div className={contactStyles.contactDetail}>
            <i className={contactStyles.icon}>📧</i>
            <p>trebeksrejects@gmail.com</p>
          </div>
          
          <div className={contactStyles.contactDetail}>
            <i className={contactStyles.icon}>📍</i>
            <p>2500 University Drive NW, Calgary, AB</p>
          </div>
          
          {/* Social media section moved inside contactInfo */}
          <h3>Follow our social media</h3>
          <p>
            Stay updated on upcoming events, trivia questions, and club activities!
          </p>
          <div className={contactStyles.socialLinks}>
            <a href="#" className={contactStyles.socialIconLink} aria-label="Instagram">
              <div className={`${contactStyles.socialIconCircle} ${contactStyles.instagram}`}>
                <FontAwesomeIcon icon={faInstagram} className={contactStyles.socialIcon} />
              </div>
              <span>Instagram</span>
            </a>
            <a href="#" className={contactStyles.socialIconLink} aria-label="Discord">
              <div className={`${contactStyles.socialIconCircle} ${contactStyles.discord}`}>
                <FontAwesomeIcon icon={faDiscord} className={contactStyles.socialIcon} />
              </div>
              <span>Discord</span>
            </a>
            <a href="#" className={contactStyles.socialIconLink} aria-label="GitHub">
              <div className={`${contactStyles.socialIconCircle} ${contactStyles.github}`}>
                <FontAwesomeIcon icon={faGithub} className={contactStyles.socialIcon} />
              </div>
              <span>GitHub</span>
            </a>
            <a href="#" className={contactStyles.socialIconLink} aria-label="TikTok">
              <div className={`${contactStyles.socialIconCircle} ${contactStyles.tiktok}`}>
                <FontAwesomeIcon icon={faTiktok} className={contactStyles.socialIcon} />
              </div>
              <span>TikTok</span>
            </a>
          </div>
        </div>
        
        <div className={contactStyles.contactForm}>
          <h3>Send us a Message</h3>
          
          {submitMessage && (
            <div
              className={
                submitMessage.startsWith('There was an error')
                  ? contactStyles.formError
                  : contactStyles.formMessage
              }
            >
              {submitMessage}
            </div>
          )}
                    
          <form onSubmit={handleSubmit}>
            <div className={contactStyles.formGroup}>
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
            
            <div className={contactStyles.formGroup}>
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

            <div className={contactStyles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={contactStyles.formGroup}>
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
              className={contactStyles.submitButton}
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