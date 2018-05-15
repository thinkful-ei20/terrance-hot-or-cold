
import React from 'react';

export default function GuessSection() {
  return (
    <section className="guess-section">
      <input placeholder="Enter your Guess"/>
      <button type="button">Guess</button>
      <p>Guess#<span id="js-guess-counter">0</span>!</p>
    </section>
  );
}