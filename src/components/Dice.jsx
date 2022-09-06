import getRandomNumber from '../utils.js';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import React, { useState } from 'react';

function Dice(props) {
  const [face, setFace] = useState(dice3);
  const diceFaces = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];
  const randomFace = () => {
    setFace(diceFaces[0]);
    setTimeout(() => setFace(diceFaces[getRandomNumber(1, 7)]), 1000);
  };
  return (
    <img className='Dice' alt="dice" onClick={randomFace} src={face}/>
  );
}

export default Dice;
