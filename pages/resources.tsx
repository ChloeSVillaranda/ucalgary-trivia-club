import React from 'react';
import Head from 'next/head';
import SubpageLayout from '../components/layouts/SubpageLayout';
import styles from '../styles/Subpage.module.css';
import { NextPageWithLayout } from '../types/page';

const ResourcesPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Resources | UCalgary Trivia Club</title>
        <meta name="description" content="Trivia resources from the University of Calgary Trivia Club" />
      </Head>
      
      <div className={styles.pageContent}>
        <h2 className={styles.contentHeading}>Trivia Resources</h2>
        <p className={styles.contentParagraph}>
          Enhance your trivia knowledge with our curated collection of educational resources.
        </p>
        
        <div className={styles.placeholder}>
          <p>Resources content coming soon!</p>
        </div>
      </div>
    </>
  );
};

// Define the layout for this page
ResourcesPage.getLayout = (page: React.ReactElement) => (
  <SubpageLayout pageTitle="Resources">
    {page}
  </SubpageLayout>
);

export default ResourcesPage;
