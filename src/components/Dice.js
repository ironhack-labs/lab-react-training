import React from 'react'
import './Dice.css'
import { useState } from 'react'
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

export default function Dice() {

    const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6]
    let randomIndex = Math.floor(Math.random() * diceArr.length)
    let randomDice = diceArr[randomIndex]

    let [dice, setDice] = useState(randomDice)

    const diceHandler = () => {
        setDice(diceEmpty)

        setTimeout(() => {
            let newRandomIndex = Math.floor(Math.random() * diceArr.length)
            setDice(diceArr[newRandomIndex])
          }, 1000);
    }
  return (
      <>
    <div>Dice</div>
    <img src={dice} onClick={diceHandler} alt="random dice" className="dice"/>
    </>
  )
}
