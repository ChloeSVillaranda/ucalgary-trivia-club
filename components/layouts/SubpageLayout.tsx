import React from 'react';
import Footer from '../Footer';
import SubpageHeader from '../SubpageHeader';

interface SubpageLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const SubpageLayout: React.FC<SubpageLayoutProps> = ({ children, pageTitle }) => {
  return (
    <div className="subpage-layout">
      <SubpageHeader title={pageTitle} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default SubpageLayout;
