import React from 'react';
import { useState } from 'react';

import dEmpty from '../assets/images/dice-empty.png';
import d1 from '../assets/images/dice1.png';
import d2 from '../assets/images/dice2.png';
import d3 from '../assets/images/dice3.png';
import d4 from '../assets/images/dice4.png';
import d5 from '../assets/images/dice5.png';
import d6 from '../assets/images/dice6.png';

export const Dice = () => {
  const dice = [d1, d2, d3, d4, d5, d6];
  const getRandomNumber = () => dice[Math.floor(Math.random() * dice.length)];
  const [number, setNumber] = useState(getRandomNumber());
  const clickHandler = () => {
    setNumber(dEmpty);
    setTimeout(function () {
      setNumber(getRandomNumber());
    }, 1000);
  };

  return (
    <img
      onClick={clickHandler}
      src={number}
      alt=""
      style={{ backgroundColor: 'white', height: '100px' }}
    />
  );
};
