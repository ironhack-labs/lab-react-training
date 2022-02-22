import { useState } from 'react';
import './Dice.css';

function Dice() {
  let [defaultDice, setDefaultDice] = useState('./images/dice-empty.png');

  const random = Math.round(Math.random() * 6);

  const diceArray = [
    './images/dice-empty.png',
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png',
  ];

  const timer = () =>
    setTimeout(() => {
      setDefaultDice(diceArray[random]);
    }, 1000);

  return (
    <article>
      <img src={defaultDice} className="dice" onClick={() => timer()} />
    </article>
  );
}

export default Dice;
