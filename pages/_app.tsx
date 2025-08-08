import '../src/App.css';

import type { AppProps } from 'next/app';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
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
