import React from 'react';
import { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import diceOne from '../assets/images/dice1.png';
import diceTwo from '../assets/images/dice2.png';
import diceThree from '../assets/images/dice3.png';
import diceFour from '../assets/images/dice4.png';
import diceFive from '../assets/images/dice5.png';
import diceSix from '../assets/images/dice6.png';

export const Dice = () => {
  const [dice, setDice] = useState(emptyDice);
  const randomDice = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

  const randomChoosed =
    randomDice[Math.floor(Math.random() * randomDice.length)];

  const rollDice = () => {
    setTimeout(() => {
      setDice(emptyDice);
      setTimeout(() => {
        setDice(randomChoosed);
      }, 1000);
    }, 1);
  };

  return (
    <div>
      <img style={{ width: '30%' }} src={dice} alt="dice" onClick={rollDice} />
    </div>
  );
};
