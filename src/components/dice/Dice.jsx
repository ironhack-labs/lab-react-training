import { useState } from 'react';
import { dices } from '../../data/dice';
import './dice.css';

const Dice = () => {
  const randomDice = Math.floor(Math.random() * dices.length);

  const [dice, setDice] = useState(dices[randomDice].img);

  const handleRandomDice = () => {
    setTimeout(() => {
      setDice(dices[randomDice].img);
    }, 1000);

    setDice(dices[0].img);
  };

  return (
    <div className="dice-container">
      <img src={dice} alt="dice" onClick={handleRandomDice} />
    </div>
  );
};

export default Dice;
