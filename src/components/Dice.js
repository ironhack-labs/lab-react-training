import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import { useState } from 'react';

let diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  let [diceNumber, setDiceNumber] = useState(diceEmpty);
  let randomDiceNumber = Math.floor(Math.random() * diceArr.length);

  function handleClick() {
    setDiceNumber(diceEmpty);
    setTimeout(() => {
      setDiceNumber(diceArr[randomDiceNumber]);
    }, 1000);
  }

  return (
    <img
      onClick={handleClick}
      src={diceNumber}
      alt="Dice"
      style={{ width: '100px' }}
    />
  );
}
export default Dice;
