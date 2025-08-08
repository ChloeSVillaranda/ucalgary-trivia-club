import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './LandingPage';
import React from 'react';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
