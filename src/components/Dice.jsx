import { useState } from 'react';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import diceEmpty from '../assets/images/dice-empty.png';

function getRandomDice() {
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];
  return dices[Math.floor(Math.random() * dices.length)];
}

function Dice() {
  const [dice, setDice] = useState(getRandomDice());

  const handleClick = () => {
    setDice(diceEmpty);
    setTimeout(() => {
      setDice(getRandomDice);
    }, 1000);
  };

  return <img src={dice} alt="Random dice" onClick={() => handleClick()} />;
}

export default Dice;
