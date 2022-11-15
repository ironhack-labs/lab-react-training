import { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

function Dice() {
  const allDice = [dice1, dice2, dice3, dice4, dice5, dice6];
  function getRandomDice() {
    return allDice[Math.floor(Math.random() * 6)];
  }

  const [diceScore, setDiceScore] = useState(getRandomDice());

  function handleClick() {
    setDiceScore(diceEmpty);
    setTimeout(() => setDiceScore(getRandomDice()), 1000);
  }

  return (
    <img src={diceScore} width={100} alt="random Dice" onClick={handleClick} />
  );
}

export default Dice;