import React from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {
  const [dice, setDice] = React.useState(diceEmpty);
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setDice(diceEmpty);
    setTimeout(() => {
      const random = Math.floor(Math.random() * 6) + 1;
      switch (random) {
        case 1:
          setDice(dice1);
          break;
        case 2:
          setDice(dice2);
          break;
        case 3:
          setDice(dice3);

          break;
        case 4:
          setDice(dice4);
          break;
        case 5:
          setDice(dice5);
          break;
        case 6:
          setDice(dice6);
          break;
        default:
          setDice(diceEmpty);
          break;
      }
    }, 1000);
  };

  return <img src={dice} alt="dice" onClick={handleClick} />;
};

export default Dice;
