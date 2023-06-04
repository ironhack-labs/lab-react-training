import { useState } from 'react';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import emptyDice from '../assets/images/dice-empty.png';

function Dice() {
  const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
  const randomDice = diceArray[Math.floor(Math.random() * diceArray.length)];

  const [dice, setDice] = useState(true);

  const changeDice = () => {
    setDice(!dice);
    setTimeout(() => {
      setDice(true);
    }, 1000);
  };

  return (
    <div className="Dice" onClick={changeDice}>
      {dice ? (
        <img src={randomDice} alt="RandomDice" />
      ) : (
        <img src={emptyDice} alt="EmptyDice" />
      )}
    </div>
  );
}

export default Dice;
