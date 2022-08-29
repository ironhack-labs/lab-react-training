import { useState } from 'react';

import './Dice.css';
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

function Dice(){
  const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [randomDice, setRandomDice] = useState(0);

  const handleRandomDice = () => setRandomDice(randomPrev => randomPrev = Math.floor(Math.random() * diceArray.length));

  return (
    <div className="dice">
      <img className="w-25" src={diceArray[randomDice]} alt="Dado" onClick={handleRandomDice} />
    </div>
  );
}

export default Dice;