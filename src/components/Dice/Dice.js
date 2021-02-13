import React, { useState } from 'react';

const Dice = () => {
  const diceImages = {
    0: '/img/dice-empty.png',
    1: '/img/dice1.png',
    2: '/img/dice2.png',
    3: '/img/dice3.png',
    4: '/img/dice4.png',
    5: '/img/dice5.png',
    6: '/img/dice6.png',
  };

  const [diceImage, setImage] = useState(diceImages[0]);

  const changeImage = () => {
    setImage(diceImages[0]);
    setTimeout(() => theSecondImage(), 1000);
  };

  const theSecondImage = () => {
    const randomNum = Math.floor(Math.random() * (6 - 1)) + 1;
    setImage(diceImages[randomNum]);
  };

  return (
    <img src={diceImage} alt="dice" width={150} onClick={() => changeImage()} />
  );
};

export default Dice;
