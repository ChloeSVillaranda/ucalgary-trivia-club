import React, { useEffect, useRef, useState } from 'react';

import faqStyles from '../styles/FAQ.module.css';
import styles from '../styles/Home.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
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

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "How can I join the Trivia Club?",
      answer: "You can join the Trivia Club by filling out the membership form on our website or attending one of our in-person events. Annual membership dues are $20 which can be paid online or at any of our events."
    },
    {
      question: "When and where are trivia events held?",
      answer: "We typically host trivia nights every Wednesday at 7 PM in the MacEwan Student Centre. Special events may be held at different venues across campus. Check our social media for the most up-to-date schedule and locations."
    },
    {
      question: "Do I need to know a lot about trivia to join?",
      answer: "Not at all! Our club welcomes members of all knowledge levels. Whether you're a trivia expert or just getting started, our events have categories for everyone. It's all about having fun and learning new things."
    },
    {
      question: "Is there a competitive team I can join?",
      answer: "Yes! We have a competitive trivia team that represents the University of Calgary at inter-university competitions. Tryouts for the team are held at the beginning of each semester. Contact us for more information about joining the competitive team."
    },
    {
      question: "Can I suggest topics for trivia nights?",
      answer: "Absolutely! We welcome topic suggestions from all our members. You can submit your ideas through our contact form or bring them up at our weekly meetings. We aim to cover a diverse range of topics that interest our members."
    },
    {
      question: "Are there opportunities to volunteer with the club?",
      answer: "Yes, we have many volunteer opportunities including helping to organize events, creating trivia questions, managing social media, and more. Volunteering is a great way to get more involved and can lead to executive positions in the future."
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className={`${styles.section} ${faqStyles.faqSection}`}>
      <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
      
      <div className={faqStyles.faqContainer}>
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={`${faqStyles.faqItem} ${activeIndex === index ? faqStyles.active : ''}`}
          >
            <div 
              className={faqStyles.faqQuestion}
              onClick={() => toggleAccordion(index)}
            >
              <h3>{item.question}</h3>
              <span className={faqStyles.faqIcon}>
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            <div className={faqStyles.faqAnswer}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
