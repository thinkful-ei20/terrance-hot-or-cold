
import React from 'react';
import GameHeader from './game-header'
import GameHint from './game-hint'
import GuessSection from './guess-section';
import GameFooter from './game-footer';

export default function GameBody() {
  
  return (
    <article className="game-container">
      <GameHeader />

      <GameHint />

      <GuessSection />

      <GameFooter />
    </article>
  );

}