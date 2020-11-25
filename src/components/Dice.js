import React from 'react'
import { useState } from 'react'

export default function Dice({}) {
    const dice = ['./img/dice1.png', './img/dice2.png', './img/dice3.png', './img/dice4.png', './img/dice5.png', './img/dice6.png']

    const [dice, setDice] = useState(0)
    
    const randomDice = e => {
        const len = dice.length
        setDice(Math.floor(Math.random() * len))
    }

    return (
        <button style={{backgroundColor:"none", border:"none"}}>
            <img src/>
{/* on click y set timeout faltan */}
        </button>
    )