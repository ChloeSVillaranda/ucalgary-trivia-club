import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { NextPageWithLayout } from '../types/page';
import React, { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../components/layouts/MainLayout';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// Using Next.js for improved SEO, performance, and routing capabilities
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  
  // Unregister any service workers on mount
  useEffect(() => {
    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    }
  }, []);

  // Check if the current page is the homepage
  const isHomePage = router.pathname === '/';

  // Add layout property to Component if it doesn't have one
  const getLayout = isHomePage 
    ? (page: React.ReactElement) => <MainLayout>{page}</MainLayout>
    : Component.getLayout ?? ((page: ReactElement) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
