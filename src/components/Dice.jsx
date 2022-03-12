import { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import Dice1 from '../assets/images/dice1.png';
import Dice2 from '../assets/images/dice2.png';
import Dice3 from '../assets/images/dice3.png';
import Dice4 from '../assets/images/dice4.png';
import Dice5 from '../assets/images/dice5.png';
import Dice6 from '../assets/images/dice6.png';

function Dice(props) {
  const imgStyle = {
    width: '100px',
  };

  const dices = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  const [randomDice, setRandomDice] = useState(emptyDice);

  function handleClick(event) {
    setRandomDice(emptyDice);
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6);
      setRandomDice(dices[randomNumber]);
    }, 1000);
  }

  return (
    <img style={imgStyle} src={randomDice} alt="dice" onClick={handleClick} />
  );
}

export default Dice;
