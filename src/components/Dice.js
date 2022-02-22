// ./src/components/Counter.js
import React, { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

function Dice() {
 
 let randomNum = Math.floor(Math.random() * 6) 
 const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6]
    
  let [imageDice, setImageDice] = useState(diceArr[randomNum]);

   const func = () => {

        let randomNum2 = Math.floor(Math.random() * 6) 
        setImageDice(imageDice = emptyDice)
        setTimeout(() => {setImageDice(imageDice = diceArr[randomNum2]) }, 1000);
  }

  return (
 <>


    <img id="dice" src={imageDice} onClick={() => func()}></img>


 </>
  );

  }
export default Dice;