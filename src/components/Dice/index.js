import './index.css';
import Emptydice from '../../assets/images/dice-empty.png';
import diceOne from '../../assets/images/dice1.png';
import diceTwo from '../../assets/images/dice2.png';
import diceThree from '../../assets/images/dice3.png';
import diceFour from '../../assets/images/dice4.png';
import diceFive from '../../assets/images/dice5.png';
import diceSix from '../../assets/images/dice6.png';
import { useState } from 'react';

export const Dice = () => {

  const [dice, setDice] = useState(diceOne);
  const diceArray = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
  const handleRollDice = () => {
    setDice(Emptydice)
    setTimeout(() => {
      const randomDice = diceArray[Math.floor(Math.random() * diceArray.length)];
      setDice(randomDice)
    },1000)
  };

  return (
    <div className="Dice">
      <img src={dice} onClick={() => handleRollDice()} alt="DICE"/>
    </div>
  );
};
