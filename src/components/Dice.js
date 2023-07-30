import React, { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const Dice = () => {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [playDice, setPlayDice] = useState(4);
  const [isRolling, setIsRolling] = useState(false);

  const handleDiceClick = () => {
    if (!isRolling) {
      setIsRolling(true);
      setPlayDice(0);

      setTimeout(() => {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        setPlayDice(randomValue);
        setIsRolling(false);
      }, 1000);
    }
  };

  return (
    <img
      src={isRolling ? diceEmpty : diceImages[playDice - 1]}
      alt={`Dice ${playDice}`}
      onClick={handleDiceClick}
      style={{ cursor: 'pointer', width: '100px'}}
    />
  );
};

export default Dice;
