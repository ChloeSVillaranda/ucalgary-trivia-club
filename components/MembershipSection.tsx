import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image'; // Add import
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

  // Current members. To be edited. 
  const currentMembers: Member[] = [
    {
      name: "Chloe Villaranda",
      position: "President",
      imageUrl: "/assets/chloe.jfif",
      bio: "I made a trivia club because I love trivia so much! 🤩🤩🤩"
    },
    {
      name: "Sukriti Badhwar",
      position: "Vice President",
      imageUrl: "/assets/members/sukriti.jpg",
      bio: "Coming soon."
    },
    {
      name: "Chantae Ho",
      position: "Treasurer",
      imageUrl: "/assets/chantae.jfif",
      bio: "Amateur trivia enthusiast, whose side job is being a software engineering student 😆. In the 'trivial pursuit' of the perfect trivia team name (suggestions welcome). Looking forward to going to trivia events this year!"
    },
    {
      name: "Maham Jamal",
      position: "Secretary",
      imageUrl: "/assets/maham.jfif",
      bio: "hey!! my name is maham and i’m a 5th year software engg student doing a minor in biomedical engg. i love painting when im not ripping my hair out while debugging code. my guessing accuracy is 56.5% so don’t bother copying my answers on trivia nights"
    },
    {
      name: "Huiying Zhenzhen",
      position: "Events Coordinator",
      imageUrl: "/assets/members/huiying.jpg",
      bio: "Coming soon."
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
            <div className={memberStyles.cardContent}>
              <h3>Become a Member</h3>
              <p>
                Join our community of trivia enthusiasts! 
              </p>
              <p>
                As a member, you'll get access to:
              </p>
              <ul className={styles.bulletList}>
                <li>Weekly small trivia meetings</li>
                <li>Other special events and competitions</li>
                <li>Monthly newsletters via email</li>
                <li>Connect with fellow trivia fans</li>
              </ul>
              <p>
                Membership is free and open to all students!
              </p>
            </div>
            <div className={memberStyles.buttonContainer}>
              <button className={styles.primaryButton}>
                Apply Now
              </button>
            </div>
          </div>
          
          {/* Executive Card */}
          <div className={memberStyles.memberCard}>
            <div className={memberStyles.cardContent}>
              <h3>Executive Positions</h3>
              <p>
                Interested in a leadership role? The executive team helps run events, manage finances, connect with members, and guide the club.
              </p>
              <p className={styles.listHeading}>
                Executive positions include:
              </p>
              <ul className={styles.twoColumnList}>
                <li>President</li>
                <li>Vice President</li>
                <li>Treasurer</li>
                <li>Secretary</li>
                <li>Events Coordinator</li>
              </ul>
              <p>
                First- or second-year? Join our Junior Executive Program for leadership experience with lighter responsibilities.
              </p>
            </div>
            <div className={memberStyles.buttonContainer}>
              <button className={styles.primaryButton}>
                Apply Now
              </button>
            </div>
          </div>

          
          {/* Other Positions Card */}
          <div className={memberStyles.memberCard}>
            <div className={memberStyles.cardContent}>
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
            </div>
            <div className={memberStyles.buttonContainer}>
              <button className={styles.primaryButton}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Current Members Section */}
      <div className={memberStyles.memberContainer}>
        <h3 className={styles.sectionTitle}>Current Members</h3>
        <p className={memberStyles.memberIntro}>
          Meet the team behind our UCalgary Trivia community
        </p>
        
        <div className={memberStyles.membersContainer}>
          {currentMembers.map((member, index) => (
            <div 
              key={index}
              className={memberStyles.memberCard}
            >
              <div className={memberStyles.memberImageContainer}>
                {member.imageUrl ? (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={100}
                    height={100}
                    className={memberStyles.memberImage}
                  />
                ) : (
                  <div className={memberStyles.memberPlaceholder}>
                    <span>
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
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