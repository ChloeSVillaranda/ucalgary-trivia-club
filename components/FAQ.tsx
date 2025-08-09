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

  //TODO: edit the FAQ as time goes by

    const faqItems: FAQItem[] = [
    {
        question: "How can I join the Trivia Club?",
        answer:
        "You can join the Trivia Club by filling out the membership form on our website or attending one of our in-person events. There is no annual fee to join and all of our events are free—so bring your friends along!"
    },
    {
        question: "When and where are trivia events held?",
        answer:
        "We typically host weekly trivia meetings at noon in the MacEwan Student Centre. Special events may be held at different venues across campus. Check our social media for the most up-to-date schedule and locations."
    },
    {
        question: "Do I need to know a lot about trivia to join?",
        answer:
        "Not at all! Our club welcomes members of all knowledge levels. Whether you're a trivia expert or just getting started, our events include categories for everyone. It's all about having fun and learning new things."
    },
    {
        question: "Is there a competitive team I can join?",
        answer:
        "At the moment, no. However, as our club expands, we plan to form competitive teams and participate in trivia tournaments both locally and nationally. If you're interested in competitive trivia, let us know so we can keep you updated when these opportunities become available."
    },
    {
        question: "Can I suggest topics for trivia nights?",
        answer:
        "Absolutely! We welcome topic suggestions from all members. You can submit your ideas through our contact form or bring them up at our weekly meetings. We aim to cover a diverse range of topics that interest our members."
    },
    {
        question: "How can I join the executive team and what will be my responsibilities?",
        answer:
        "Executive team positions open up during our annual elections or when vacancies occur. You can apply by submitting your interest through our website or speaking to a current executive member. Responsibilities may include organizing events, managing social media, coordinating volunteers, and helping shape the future direction of the club."
    },
    {
        question: "How can I help contribute to the Trivia Club?",
        answer:
        "You can contribute by volunteering at events, creating trivia questions, helping promote our activities, or inviting friends to join. Even small efforts (like sharing our social media posts) help grow our community. We are also looking for software developers interested in helping maintain the club website as well as being part of the development team in developing a web application for our trivia events."
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
