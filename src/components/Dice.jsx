import React, { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const [currentDice, setCurrentDice] = useState(diceEmpty);

  const diceNumbers = [dice1, dice2, dice3, dice4, dice5, dice6];

  const handleClick = () => {
    setCurrentDice(diceEmpty);
    setTimeout(() => {
      const randomDiceNumber =
        diceNumbers[Math.floor(Math.random() * diceNumbers.length)];
      setCurrentDice(randomDiceNumber);
    }, 1000);
    setCurrentDice(diceEmpty);
  };

  const styles = {
    image: {
      width: "200px",
      margin: "20px",
    },
  };

  return (
    <div>
      <img
        src={currentDice}
        alt="dice"
        style={styles.image}
        onClick={handleClick}
      ></img>
    </div>
  );
}

export default Dice;
