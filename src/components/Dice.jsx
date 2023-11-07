import React, { useState } from "react";
import EmptyDice from "../assets/images/dice-empty.png";
import Dice1 from "../assets/images/dice1.png";
import Dice2 from "../assets/images/dice2.png";
import Dice3 from "../assets/images/dice3.png";
import Dice4 from "../assets/images/dice4.png";
import Dice5 from "../assets/images/dice5.png";
import Dice6 from "../assets/images/dice6.png";

const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

const Dice = () => {
  const [diceValue, setDiceValue] = useState(EmptyDice);
  const [isLoading, setIsLoading] = useState(false);

  const rollDice = () => {
    // Display empty dice image
    setDiceValue(null);
    setIsLoading(true);

    // After 1 second, display a random dice image
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      const randomDiceImage = diceImages[randomNumber - 1];
      setDiceValue(randomDiceImage);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="diceContainer" onClick={rollDice} style={{ cursor: "pointer" }}>
      <img
        src={isLoading ? EmptyDice : diceValue}
        alt="Dice"
        style={{ width: "50%" }}
      />
    </div>
  );
};

export default Dice;
