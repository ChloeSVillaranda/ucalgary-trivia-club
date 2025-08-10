import Link from 'next/link';
import React from 'react';
import styles from '../styles/SubpageHeader.module.css';

interface SubpageHeaderProps {
  title?: string;
}

const SubpageHeader: React.FC<SubpageHeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.homeLink}>
          <span className={styles.backButton}>← Back to Home</span>
        </Link>
        
        {title && <h1 className={styles.pageTitle}>{title}</h1>}
      </div>
    </header>
  );
};

export default SubpageHeader;