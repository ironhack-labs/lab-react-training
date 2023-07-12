import React from 'react';
import { useState } from 'react';
import dice0 from '../assets/images/dice-empty.png';
import dice3 from '../assets/images/dice3.png';
import dice6 from '../assets/images/dice6.png';

function Dice() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const dices = isClicked ? dice0 : dice3;
  return (
    <div onClick={handleClick}>
      <img src={dices} alt="dice" />
    </div>
  );
}

export default Dice;
