import '../styles/globals.css';

import React, { useEffect } from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import MainLayout from '../components/layouts/MainLayout';

// Using Next.js for improved SEO, performance, and routing capabilities
function MyApp({ Component, pageProps }: AppProps) {
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
    : (Component as any).getLayout || ((page: React.ReactElement) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
