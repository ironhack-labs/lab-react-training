import { useState } from 'react';
import './Component.css';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  let randomDice = dices[Math.floor(Math.random() * dices.length)];

  const [diceNumber, setDiceNumber] = useState(randomDice);

  function handleClick() {
    setDiceNumber(diceEmpty);

    setTimeout(() => {
      setDiceNumber(randomDice);
    }, 1000);
  }
  return (
    <div>
      <img className="dice" onClick={handleClick} src={diceNumber} alt="dice" />
    </div>
  );
}

export default Dice;
