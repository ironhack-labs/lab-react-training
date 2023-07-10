import React, { useState, useEffect } from 'react';

import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const diceData = [dice1, dice2, dice3, dice4, dice5, dice6];

export default function Dice() {
  const [dice, setDice] = useState(emptyDice);

  const rollDice = () => {
    setDice(emptyDice);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceData.length);
      setDice(diceData[randomIndex]);
    }, 1000);
  };

  useEffect(() => {
    const handleClick = () => {
      rollDice();
    };

    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div>
      <img
        style={{ width: '300px' }}
        src={dice}
        alt="dice"
        onClick={rollDice}
      />
    </div>
  );
}
