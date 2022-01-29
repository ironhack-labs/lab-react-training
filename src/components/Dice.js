import React, { useState } from 'react';
import dice0 from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

const Dice = () => {

  const [diceRoll, setDiceRoll] = useState(0);
  const diceImg = [dice0, dice1, dice2, dice3, dice4, dice5, dice6 ]

  const rollDice = () => {
    const diceRandom = Math.floor(Math.random() * 6) + 1
    setDiceRoll(diceRandom)
  }

  return (
    <>
      <img 
        className="margin-all"
        style={{width:"100px"}}
        onClick={() => {
          const diceZero = 0
          setDiceRoll(diceZero)
          setTimeout(() => rollDice(), 1000)}}
        src={`${diceImg[diceRoll]}`} />
    </>
  );
};

export default Dice;
