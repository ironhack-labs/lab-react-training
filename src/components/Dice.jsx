import React, { useState } from 'react';
import diceEmptyImage from './../assets/images/dice-empty.png'
import dice1Image from './../assets//images/dice1.png';
import dice2Image from './../assets/images/dice2.png';
import dice3Image from './../assets/images/dice3.png';
import dice4Image from './../assets/images/dice4.png';
import dice5Image from './../assets/images/dice5.png';
import dice6Image from './../assets/images/dice6.png';

const diceImages = [dice1Image, dice2Image, dice3Image, dice4Image, dice5Image, dice6Image];

const Dice = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);

    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue);
      setIsRolling(false);
    }, 1000);
  };

  const diceImage = isRolling ? diceEmptyImage : diceImages[diceValue - 1];

  const diceStyle = {
    width: '200px',
    height: '200px',
    cursor: 'pointer'
  };

  return (
    <img
      className="dice"
      src={diceImage}
      alt={`Dice ${diceValue}`}
      style={diceStyle}
      onClick={rollDice}
    />
  );
};

export default Dice;
