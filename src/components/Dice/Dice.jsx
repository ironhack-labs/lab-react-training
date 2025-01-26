import { useState } from "react";
import emDice from "./../../assets/images/dice-empty.png";
import dice1 from "./../../assets/images/dice1.png";
import dice2 from "./../../assets/images/dice2.png";
import dice3 from "./../../assets/images/dice3.png";
import dice4 from "./../../assets/images/dice4.png";
import dice5 from "./../../assets/images/dice5.png";
import dice6 from "./../../assets/images/dice6.png";
function Dice() {
  const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
  const randomNum = Math.floor(Math.random() * 6);
  const [curr, setDice] = useState(diceArray[randomNum])
  const rollDice = () => {
      setDice(emDice)
      setTimeout(() => {
        const newRandomNum = Math.floor(Math.random() * 6);
        setDice(diceArray[newRandomNum])
      }, "1000");
  }
  return (
    <div className="dice">
      <img style={{ width: "200px" }} src={curr} alt="dice" onClick={()=>rollDice()}/>
    </div>
  );
}

export default Dice;
