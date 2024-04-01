import { useState } from 'react';
import './Dice.css';
import diceEmpty from '../../../assets/images/dice-empty.png';

function Dice() {

  const [actualDice, rollDice] = useState()

  const roll = () => {
    const num = Math.floor(Math.random(1) * 6) + 1;
    setTimeout(() => {
      rollDice(num);
    }, 1000)
    
  }

  return (
    <div className='container-dice'>
      <img onClick={roll} src={actualDice ? `./src/assets/images/dice${actualDice}.png` : diceEmpty} className='dice'/>
    </div>
  );
}

export default Dice;