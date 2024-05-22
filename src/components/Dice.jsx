import React, { useState } from "react";
import "./DiceImg.css";
import emptyDiceImg from "../assets/images/dice-empty.png";
import DiceImgOne from "../assets/images/dice1.png";
import DiceImgTwo from "../assets/images/dice2.png";
import DiceImgThree from "../assets/images/dice3.png";
import DiceImgFour from "../assets/images/dice4.png";
import DiceImgFive from "../assets/images/dice5.png";
import DiceImgSix from "../assets/images/dice6.png";

const Dice = () => {
  const diceImages = [emptyDiceImg, DiceImgOne, DiceImgTwo, DiceImgThree, DiceImgFour, DiceImgFive, DiceImgSix];

  const [diceImg, setDiceImg] = useState(emptyDiceImg);

  const rollDice = () => {
    setDiceImg(emptyDiceImg); // Set to empty dice image
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceImg(diceImages[randomValue]);
    }, 1000); // Update after 1 second to simulate rolling
  };

  return (
    <div className="DiceContainer" onClick={rollDice}>
      <img className="DiceImg" src={diceImg} alt="dice" />
    </div>
  );
};

export default Dice;



// images.js
// or prepare another components stored img

// import Image1 from './image1.jpg'
// import Image2 from './image2.jpg'
// import Image3 from './image3.jpg'
// import Image4 from './image4.jpg'
// import Image5 from './image5.jpg'

// export {
// 	Image1, Image2, Image3, Image4, Image5
// };

// product.js

// import { Image3 } from 'images'
