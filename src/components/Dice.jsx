import { useState } from 'react';
import Dice0 from '../assets/images/dice-empty.png';
import Dice1 from '../assets/images/dice1.png';
import Dice2 from '../assets/images/dice2.png';
import Dice3 from '../assets/images/dice3.png';
import Dice4 from '../assets/images/dice4.png';
import Dice5 from '../assets/images/dice5.png';
import Dice6 from '../assets/images/dice6.png';
const dice = [Dice0, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

function randomNumber() {
  return Math.floor(Math.random() * (dice.length - 1) + 1);
}

function Dice() {
  const [currentDice, setCurrentDice] = useState(3);

  function randomDice() {
    setCurrentDice(0);
    setTimeout(() => {
      setCurrentDice(randomNumber());
    }, 1000);
  }

  return (
    <section className="dice">
      <img src={dice[currentDice]} alt="dice" onClick={() => randomDice()} />
    </section>
  );
}

export default Dice;
