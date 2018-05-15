
import React from 'react';
import Header from './site-header';
import GameBody from './game-body';
import '../styles/game.css';

export default function Game() {
  return (
    <div className="site-container">
      <Header />
      
      <main role="main">
        <GameBody />
      </main>
    </div>
  );
}