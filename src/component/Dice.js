import React, { useState } from 'react';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [rolling, setRolling] = useState(false);

  const handleClick = () => {
    if (!rolling) {
      setRolling(true);
      setDiceValue(0);
      setTimeout(() => {
        setDiceValue(Math.floor(Math.random() * 6) + 1);
        setRolling(false);
      }, 1000);
    }
  };

  return (
    <img
      src={`../assets/images/dice${diceValue === 0 ? '-empty' : diceValue}.png`}
      alt={`Dice with value ${diceValue}`}
      style={{ cursor: 'pointer' }}
      onClick={handleClick}
    />
  );
};

export default Dice;
