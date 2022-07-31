import { useState } from 'react';
import Dice1 from '../assets/images/dice1.png';
import Dice2 from '../assets/images/dice2.png';
import Dice3 from '../assets/images/dice3.png';
import Dice4 from '../assets/images/dice4.png';
import Dice5 from '../assets/images/dice5.png';
import Dice6 from '../assets/images/dice6.png';
import Dice_empty from '../assets/images/dice-empty.png';

function Dice() {
  //array of dice faces
  const diceArray = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  //generate random dice number
  const randomImg = Math.floor(Math.random() * diceArray.length);
  //timeout goes to empty face and a second later to new dice face
  const rollDice = () => {
    setDiceValue(Dice_empty);
    setTimeout(() => setDiceValue(diceArray[randomImg]), 1000);
  };
  //useState starting from Dice3 dice face
  const [diceValue, setDiceValue] = useState(Dice3);
  return (
    <img
      onClick={rollDice}
      src={diceValue}
      alt="dice"
      style={{ width: 100, height: 100 }}
    />
  );
}

export default Dice;
