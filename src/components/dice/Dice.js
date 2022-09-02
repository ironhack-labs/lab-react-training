import { useState } from 'react';

import './Dice.css';
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

import diceEmpty from '../../assets/images/dice-empty.png'

function Dice(){
  const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [randomDice, setRandomDice] = useState(dice3);

  const handleRandomDice = () => {
    setRandomDice(diceEmpty);
    setTimeout(() => setRandomDice(randomPrev => randomPrev = diceArray[Math.floor(Math.random() * diceArray.length)]), 1000)
  };

  return (
    <div className="dice">
      <img className="w-25" src={randomDice} alt="Dado" onClick={handleRandomDice} />
    </div>
  );
}

export default Dice;