import React, { useState } from 'react';

const diceImages = [
  '/assets/images/dice-empty.png',
  '/assets/images/dice1.png',
  '/assets/images/dice2.png',
  '/assets/images/dice3.png',
  '/assets/images/dice4.png',
  '/assets/images/dice5.png',
  '/assets/images/dice6.png'
];

const Dice = () => {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    setDiceValue(0); // show empty dice image
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue);
    }, 1000); // wait 1 second before updating dice image
  };

  return (
    <img
      src={diceImages[diceValue]}
      alt={`dice ${diceValue}`}
      style={{ cursor: 'pointer' }}
      onClick={rollDice}
    />
  );
};

export default Dice;
