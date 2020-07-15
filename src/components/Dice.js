import React, { useState } from 'react';

const Dice = () => {
  const emptyDice = './img/dice-empty.png';
  const arrDices = [
    './img/dice1.png',
    './img/dice2.png',
    './img/dice3.png',
    './img/dice4.png',
    './img/dice5.png',
    './img/dice6.png',
  ];
  let randomDice = arrDices[Math.floor(Math.random() * arrDices.length)];
  const [stateDice, setStateDice] = useState(randomDice);
  const handleChange = () => {
    setStateDice(emptyDice);
    setTimeout(() => {
      setStateDice(randomDice);
    }, 1000);
  };
  return <img src={stateDice} alt="Random dice" onClick={handleChange} />;
};

export default Dice;
