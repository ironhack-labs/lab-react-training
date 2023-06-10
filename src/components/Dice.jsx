import { useState } from 'react';

import dice0 from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

function Dice() {
  const diceArr = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];
  const getRandomDice = () => {
    return Math.floor(Math.random() * (diceArr.length - 1) + 1);
  };
  const [diceNum, setDice] = useState(getRandomDice);

  const updateDice = () => {
    setDice(0);
    setTimeout(() => {
      setDice(getRandomDice());
    }, 1000);
  };

  return (
    <img
      src={diceArr[diceNum]}
      onClick={updateDice}
      alt={'dice with value ' + diceNum}
      width="300"
    />
  );
}

export default Dice;
