import React, { useState } from "react";

const diceImages = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
];

const Dice = () => {
  const [diceValue, setDiceValue] = useState(false);

  const rollDice = () => {

    setDiceValue(false);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setDiceValue(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <div>
      <img
        src={
          diceValue
            ? `/src/assets/images/${diceValue}`
            : "/src/assets/images/dice-empty.png"
        }
        alt="Dice"
        onClick={rollDice}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Dice;
