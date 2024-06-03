import { useState } from "react";
import empty from "./../../assets/images/dice-empty.png";
import dice1 from "./../../assets/images/dice1.png";
import dice2 from "./../../assets/images/dice2.png";
import dice3 from "./../../assets/images/dice3.png";
import dice4 from "./../../assets/images/dice4.png";
import dice5 from "./../../assets/images/dice5.png";
import dice6 from "./../../assets/images/dice6.png";
import "./Dice.css";
const Dice = () => {
  const images = [empty, dice1, dice2, dice3, dice4, dice5, dice6];
  const [click, setClick] = useState(0);
  
  const handleClick = () => {
    setClick(0)
    setTimeout(() => {
        setClick(Math.round(Math.random() * (images.length - 1)));
    }, 1000);
  };
  return (
    <div className="dice">
      <img src={images[click]} onClick={handleClick} />
      {click}
    </div>
  );
};

export default Dice;
