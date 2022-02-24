// ./components/Main/Dice.js

import React, { useState } from 'react'
import diceEmpty from "../../assets/images/dice-empty.png"
import dice1 from "../../assets/images/dice1.png"
import dice2 from "../../assets/images/dice2.png"
import dice3 from "../../assets/images/dice3.png"
import dice4 from "../../assets/images/dice4.png"
import dice5 from "../../assets/images/dice5.png"
import dice6 from "../../assets/images/dice6.png"

export default function Dice() {

    const randomNumber = Math.floor(Math.random() * (6 - 1) + 1)
    // console.log(randomNumber)

    const diceRolls = [dice1,dice2,dice3,dice4,dice5,dice6]

    const [dice,setDice] = useState(diceRolls[randomNumber])

    const awaitDice = () => {
        setDice(diceEmpty)
        setTimeout(rollDice,1000)
    }

    const rollDice = () => {
        const randomNumber = Math.floor(Math.random() * (6 - 1) + 1)
        setDice(diceRolls[randomNumber])
        console.log(dice)
    }

  return (
    <div>
        <img src={dice} onClick={ ()=>{ awaitDice() }} alt="diceImg" width="100px"></img>
    </div>
  )
}
