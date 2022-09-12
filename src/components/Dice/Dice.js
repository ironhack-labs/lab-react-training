import React from 'react'
import { useState} from 'react';
import dice0 from "../../assets/images/dice-empty.png";
import dice1 from "../../assets/images/dice1.png";
import dice2 from "../../assets/images/dice2.png";
import dice3 from "../../assets/images/dice3.png";
import dice4 from "../../assets/images/dice4.png";
import dice5 from "../../assets/images/dice5.png";
import dice6 from "../../assets/images/dice6.png";

const initialState = [dice1, dice2, dice3, dice4, dice5, dice6]

function Dice() {
const [dice, setDice] = useState(initialState[2])


const handleClick = () => {
  setDice(dice0)

  const randomNumber = (Math.floor(Math.random() * (5 - 0)) + 0)
  setTimeout(
    setDice(initialState[randomNumber]
      ), 1000);
}

  return (
    <img className='w-25'  src={dice} alt="Dices"  onClick={handleClick} />
  )
}

export default Dice