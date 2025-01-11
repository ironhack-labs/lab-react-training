import emptyDice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import { useState } from "react";

const allDices = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  let initialRandomValue = Math.floor(Math.random() * allDices.length);
  const [diceImage, setDiceImage] = useState(allDices[initialRandomValue]);

  const handleOnClickDice = () => {
    setDiceImage(emptyDice);
    setTimeout(() => {
      let randomValue = 1 + Math.floor(Math.random() * 6);
      setDiceImage(allDices[randomValue]);
    }, 1000);
  };

  console.log(diceImage);

  return (
    <div>
      <img src={diceImage} onClick={handleOnClickDice} width="50%" />
    </div>
  );
}

export default Dice;