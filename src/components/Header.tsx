import Link from 'next/link';
import React from 'react';

// Your existing React component - just update the Link component
function Header() {
  return (
    <header className="App-header">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/trivia">Trivia</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
export default Header;
