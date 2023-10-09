import React, { useState } from 'react';

const DiceComponent = () => {
  const [diceValue, setDiceValue] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  const diceImages = [
    './dice1.png',
    './dice2.png',
    './dice3.png',
    './dice4.png',
    './dice5.png',
    './dice6.png',
  ];

  const rollDice = () => {
    if (!isRolling) {
      setIsRolling(true);

      // Show an empty dice image
      setDiceValue('./dice-empty.png');

      // After 1 second, show a random dice image
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * diceImages.length);
        setDiceValue(diceImages[randomIndex]);
        setIsRolling(false);
      }, 1000);
    }
  };

  return (
    <div>
      <img src={diceValue} alt="Dice" onClick={rollDice} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default DiceComponent;