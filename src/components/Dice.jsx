import React from "react";
import { useState } from "react";
import blank from "../assets/images/dice-empty.png";
import one from "../assets/images/dice1.png";
import two from "../assets/images/dice2.png";
import three from "../assets/images/dice3.png";
import four from "../assets/images/dice4.png";
import five from "../assets/images/dice5.png";
import six from "../assets/images/dice6.png";

function Dice() {
  const [clicked, setClicked] = useState(false);

  const [currentDice, setCurrentDice] = useState(blank);
  const allDice = [one, two, three, four, five, six];
  let randomDiceIndex = Math.floor(Math.random() * allDice.length);

  const rollDice = () => {
    setCurrentDice(blank);
    setTimeout(() => {
      setCurrentDice(allDice[randomDiceIndex]);
    }, 1000);
  };

  return (
    <div>
      Dice
      <img
        onClick={() => rollDice()}
        style={{ height: "150px" }}
        src={currentDice}
        alt="click"
      />
    </div>
  );
}

export default Dice;
