import React, {useState} from 'react'
import emptyDice from "../assets/images/dice-empty.png"
import diceOne from "../assets/images/dice1.png";
import diceTwo from "../assets/images/dice2.png";
import diceThree from "../assets/images/dice3.png";
import diceFour from "../assets/images/dice4.png";
import diceFive from "../assets/images/dice5.png";
import diceSix from "../assets/images/dice6.png";


const diceDataArr= [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

export default function Dice() {

  const [valueDice, setValueDice]= useState(emptyDice);
 
  
function handleClick() {
  setValueDice(emptyDice);
}

setTimeout(() => {

  let randomIndex=Math.floor(Math.random()* diceDataArr.length)
  setValueDice(diceDataArr[randomIndex])

}, 1000);

  return (
    <div className='dice'>
    <img onClick={handleClick} src={valueDice} alt= "diceImage"></img>
    
    </div>
  )
}
