import React, { useEffect, useRef, useState } from 'react';

import memberStyles from '../styles/MembershipSection.module.css';
import styles from '../styles/Home.module.css';

interface Member {
  name: string;
  position: string;
  imageUrl?: string;
  bio?: string;
}

const MembershipSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Example data for current members
  const currentMembers: Member[] = [
    {
      name: "John Doe",
      position: "President",
      bio: "UFC enthusiast since 2010, specializing in fighter statistics."
    },
    {
      name: "Jane Smith",
      position: "Vice President",
      bio: "MMA analyst and event coordinator."
    },
    {
      name: "Mike Johnson",
      position: "Treasurer",
      bio: "Finance major with a passion for UFC history."
    },
  ];

  return (
    <section 
      id="membership" 
      ref={sectionRef}
      className={`${styles.section} ${memberStyles.membershipSection} ${isVisible ? styles.visible : ''}`}
    >
      <h2 className={styles.sectionTitle}>Membership</h2>
      
      {/* How to Join Section */}
      <div className={memberStyles.memberContainer}>
        <h3 className={styles.sectionTitle}>How to Join</h3>
        
        <div className={memberStyles.membersContainer}>
          {/* Member Card */}
          <div className={memberStyles.memberCard}>
            <h3>Become a Member</h3>
            <p>
              Join our community of UFC enthusiasts! As a member, you'll get access to:
            </p>
            <ul className={styles.bulletList}>
              <li>Weekly trivia events</li>
              <li>Exclusive watch parties</li>
              <li>Discounted merchandise</li>
              <li>Connect with fellow UFC fans</li>
            </ul>
            <p>
              Membership is open to all students. Annual dues are $20.
            </p>
            <button className={styles.primaryButton}>
              Apply Now
            </button>
          </div>
          
          {/* Executive Card */}
          <div className={memberStyles.memberCard}>
            <h3>Executive Positions</h3>
            <p>
              Want to take a leadership role? Executive members organize events, manage finances, and guide the club's direction.
            </p>
            <p className={styles.listHeading}>
              Executive positions include:
            </p>
            <ul className={styles.bulletList}>
              <li>President</li>
              <li>Vice President</li>
              <li>Treasurer</li>
              <li>Secretary</li>
              <li>Events Coordinator</li>
            </ul>
            <p>
              Elections are held annually in April.
            </p>
            <button className={styles.primaryButton}>
              Learn More
            </button>
          </div>
          
          {/* Other Positions Card */}
          <div className={memberStyles.memberCard}>
            <h3>Other Opportunities</h3>
            <p>
              Not ready for executive commitment? We have other ways to get involved:
            </p>
            <ul className={styles.bulletList}>
              <li>Trivia Writer</li>
              <li>Social Media Manager</li>
              <li>Event Staff</li>
              <li>Content Creator</li>
              <li>Web Developer</li>
            </ul>
            <p>
              These positions are filled on an as-needed basis.
            </p>
            <button className={styles.primaryButton}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Current Members Section */}
      <div className={memberStyles.memberContainer}>
        <h3 className={styles.sectionTitle}>Current Members</h3>
        <p className={memberStyles.memberIntro}>
          Meet the team behind our UFC Trivia community
        </p>
        
        <div className={memberStyles.membersContainer}>
          {currentMembers.map((member, index) => (
            <div 
              key={index}
              className={memberStyles.memberCard}
            >
              <div className={memberStyles.memberImageContainer}>
                {/* Removed Image component causing fetchPriority warning */}
                <div className={memberStyles.memberPlaceholder}>
                  <span>
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p className={memberStyles.memberPosition}>{member.position}</p>
              {member.bio && <p>{member.bio}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;