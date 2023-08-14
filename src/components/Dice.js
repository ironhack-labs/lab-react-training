import React, { useState } from 'react';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (!isRolling) {
      setIsRolling(true);
      setDiceValue(null);

      setTimeout(() => {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(randomValue);
        setIsRolling(false);
      }, 1000);
    }
  };

  return (
    <img
      src={diceValue ? `../assets/images/dice${diceValue}.png` : '../assets/images/dice-empty.png'}
      alt="Dice"
      onClick={rollDice}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default Dice;
