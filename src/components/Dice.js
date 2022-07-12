import React from 'react';
import { useState } from 'react';
import DiceEmpty from '../assets/images/dice-empty.png';
import Dice1 from '../assets/images/dice1.png';
import Dice2 from '../assets/images/dice2.png';
import Dice3 from '../assets/images/dice3.png';
import Dice4 from '../assets/images/dice4.png';
import Dice5 from '../assets/images/dice5.png';
import Dice6 from '../assets/images/dice6.png';

function Dice(props) {
  const [dice, setDice] = useState(DiceEmpty);

  const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  function getRandomDice() {
    const randomDice =
      diceImages[Math.floor(Math.random() * diceImages.length)];
    console.log(randomDice);
    return randomDice;
  }

  function handleDice() {
    setTimeout(() => {
      setDice(getRandomDice());
    }, 1000);
  }

  console.log('DICE SRC: ', dice);
  return (
    <>
      <img
        alt={props.alt}
        src={dice}
        style={{ width: '200px', height: '200px' }}
        onClick={handleDice}
      />
    </>
  );
}

export default Dice;
