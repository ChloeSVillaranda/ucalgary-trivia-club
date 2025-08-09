import '../styles/globals.css';

import React, { useEffect } from 'react';

import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Using Next.js for improved SEO, performance, and routing capabilities
function MyApp({ Component, pageProps }: AppProps) {
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

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
