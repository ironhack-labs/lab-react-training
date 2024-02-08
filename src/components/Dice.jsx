import { useState } from "react";
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6]

const Dice = () => {
  const [diceImage, setDiceImage] = useState(dice1);

  const rollDice = () => {
    setDiceImage(emptyDice);

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6);
      setDiceImage(diceArr[randomNumber]);
    }, 1000);
  };

  return (
    <div>
      <img
        src={diceImage}
        alt="Dice"
        style={{ width: "100px", height: "100px", cursor: "pointer" }}
        onClick={rollDice}
      />
    </div>
  );
};

export default Dice;
