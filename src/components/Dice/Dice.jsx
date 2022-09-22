import React, { useState } from 'react';
import './Dice.css';
import dice1 from '../../assets/images/dice1.png';
import dice2 from '../../assets/images/dice2.png';
import dice3 from '../../assets/images/dice3.png';
import dice4 from '../../assets/images/dice4.png';
import dice5 from '../../assets/images/dice5.png';
import dice6 from '../../assets/images/dice6.png';
import emptyDice from '../../assets/images/dice-empty.png';

const Dice = () => {
  const [currentDice, setCurrentDice] = useState(dice1);
  const imagesArray = [dice1, dice2, dice3, dice4, dice5, dice6];

  const generateRandomDice = () => {
    setCurrentDice(imagesArray[Math.floor(Math.random() * imagesArray.length)]);
  };

  return (
    <div>
      <img
        onClick={() => {
          setCurrentDice(emptyDice);
          setTimeout(generateRandomDice, 1000);
        }}
        src={currentDice}
        alt="dices"
        className="dice"
      />
    </div>
  );
};

export default Dice;
