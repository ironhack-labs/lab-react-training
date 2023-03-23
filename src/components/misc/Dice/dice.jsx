import React from "react";
import './dice.css'

import empty from '../../../../src/assets/images/dice-empty.png'
import dice1 from '../../../../src/assets/images/dice1.png'
import dice2 from '../../../../src/assets/images/dice2.png'
import dice3 from '../../../../src/assets/images/dice3.png'
import dice4 from '../../../../src/assets/images/dice4.png'
import dice5 from '../../../../src/assets/images/dice5.png'
import dice6 from '../../../../src/assets/images/dice6.png'




const Dice = () => {
    let diceImg = dice1;
  
    const randomDice = (event) => {
      event.target.src = empty; 

      setTimeout(() => {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
        event.target.src = diceImages[randomValue - 1];
      }, 1000);
    };
  
    return (
      <img className="Dice" src={diceImg} alt="" onClick={randomDice}/>
    );
};
  

export default Dice;