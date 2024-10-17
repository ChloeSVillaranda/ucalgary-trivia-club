import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <nav>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/trivia">Trivia</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
