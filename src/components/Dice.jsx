
import {useState} from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";


function Dice() {
  const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [displayedDice, setDisplayedDice] = useState(dice1);
  const [isDiceClicked, setIsDiceClicked] = useState(false);

  const isClicked = () => {
    setIsDiceClicked(!isDiceClicked)
    setDisplayedDice(diceEmpty);
    setTimeout(() => {
        setDisplayedDice(diceArray[Math.floor(Math.random() * diceArray.length)])
        }, 1000);
    return displayedDice}

  return (
    <div>
        <img style={{height: "200px"}} alt="dice" onClick={isClicked} src={displayedDice}/>
    </div>
  )
}

export default Dice

