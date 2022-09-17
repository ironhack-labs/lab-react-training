import { useState } from 'react';
import Dice0 from '../assets/images/dice-empty.png';
import Dice1 from '../assets/images/dice1.png';
import Dice2 from '../assets/images/dice2.png';
import Dice3 from '../assets/images/dice3.png';
import Dice4 from '../assets/images/dice4.png';
import Dice5 from '../assets/images/dice5.png';
import Dice6 from '../assets/images/dice6.png';

const dice = [Dice0, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

function throwDice() {
  return Math.floor(Math.random() * (6 - 1) + 1);
}

function Dice() {
  const [isClicked, setIsClicked] = useState(throwDice());

  return (
    <div
      onClick={() => {
        setIsClicked(0);
        setTimeout(() => {
          setIsClicked(throwDice());
        }, 1000);
      }}
      style={{
        width: '200px',
        height: '200px',
        padding: '10px',
        border: 'solid #00BFFF 1px',
      }}
    >
      <img style={{ height: '100%' }} src={dice[isClicked]} alt=""></img>
    </div>
  );
}

export default Dice;
