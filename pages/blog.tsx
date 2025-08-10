import React from 'react';
import Head from 'next/head';
import SubpageLayout from '../components/layouts/SubpageLayout';
import styles from '../styles/Subpage.module.css';
import { NextPageWithLayout } from '../types/page';

const BlogPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Blog | UCalgary Trivia Club</title>
        <meta name="description" content="Official blog of the University of Calgary Trivia Club" />
      </Head>
      
      <div className={styles.pageContent}>
        <h2 className={styles.contentHeading}>Welcome to Our Blog</h2>
        <p className={styles.contentParagraph}>
          This is where we share trivia insights, club updates, and community content.
        </p>
        
        <div className={styles.placeholder}>
          <p>Blog content coming soon!</p>
        </div>
      </div>
    </>
  );
};

// Define the layout for this page
BlogPage.getLayout = (page: React.ReactElement) => (
  <SubpageLayout pageTitle="Blog">
    {page}
  </SubpageLayout>
);

export default BlogPage;
