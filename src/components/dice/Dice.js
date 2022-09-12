import "./Dice.css"
import React from 'react'
import { useState } from 'react';
import dice0 from "../../assets/images/dice-empty.png"
import dice1 from "../../assets/images/dice1.png"
import dice2 from "../../assets/images/dice2.png"
import dice3 from "../../assets/images/dice3.png"
import dice4 from "../../assets/images/dice4.png"
import dice5 from "../../assets/images/dice5.png"
import dice6 from "../../assets/images/dice6.png"


  
  

function Dice() {
  const [dice, setDice] = useState(dice0)
  const diceView = [dice0, dice1, dice2, dice3, dice4, dice5, dice6]
  const handleClick = () => {
    setDice(diceView[0])
  } 

  if (dice === dice0) {
    setTimeout(function() {setDice(diceView[Math.floor(Math.random() * 6 + 1)])}, 1000)
  }
  
  return (
    <div className='d-flex justify-content-center my-5'>
      <img className='dice' src={dice} alt="dice"  onClick={() => handleClick()}/>
    </div>
  )
}

export default Dice