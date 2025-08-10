import Footer from '../components/Footer';
import Head from 'next/head';
import React from 'react';
import SubpageHeader from '../components/SubpageHeader';
import styles from '../styles/SubpageLayout.module.css';

const PageNamePage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Page Title | UCalgary Trivia Club</title>
        <meta name="description" content="Description of the page" />
      </Head>

      <SubpageHeader title="Page Title" />
      
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <h2>Main Heading</h2>
          <p>Introduction paragraph</p>
          
          {/* Add your content here */}
          <div className={styles.placeholder}>
            <p>Content coming soon!</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PageNamePage;
