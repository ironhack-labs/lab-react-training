import React, { useState } from 'react';
import './Dice.css';

const Dice = () => {
  const [diceState, setDice] = useState('/img/dice3.png');

  const changeDice = () => {
    let randomDiceValue = Math.ceil(Math.random() * 6);
    if (randomDiceValue === 1) {
      setDice('/img/dice1.png');
    } else if (randomDiceValue === 2) {
      setDice('/img/dice2.png');
    } else if (randomDiceValue === 3) {
      setDice('/img/dice3.png');
    } else if (randomDiceValue === 4) {
      setDice('/img/dice4.png');
    } else if (randomDiceValue === 5) {
      setDice('/img/dice5.png');
    } else {
      setDice('/img/dice6.png');
    }
  };

  return (
    <div className="dicebox">
      <img
        onClick={() => changeDice()}
        className="diceimage"
        src={diceState}
        alt="diceimage"
      />
    </div>
  );
};

export default Dice;
