import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Sample pages (You can expand them later)
const Home = () => <h2>Welcome to the Trivia Game</h2>;
const Leaderboard = () => <h2>Leaderboard</h2>;
const Trivia = () => <h2>Trivia Questions</h2>;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/trivia" element={<Trivia />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
