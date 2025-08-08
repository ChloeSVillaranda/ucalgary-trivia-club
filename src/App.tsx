import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './pages/About';
import Footer from './components/Footer';
import Header from './components/Header';
// Import pages from the pages folder
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import React from 'react';
import Trivia from './pages/Trivia';

// New About Page

function App() {
  return (
    // If you're deploying to a subdirectory, add the basename prop
    // Example: <Router basename="/ufc-trivia-website">
    <Router>
      <div className="App">
        <Header />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/about" element={<About />} />  {/* New Route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
