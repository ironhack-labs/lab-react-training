import React, { useState } from 'react'
import dEmpty from '../assets/images/dice-empty.png'
import Dice1 from '../assets/images/dice1.png'
import Dice2 from '../assets/images/dice2.png'
import Dice3 from '../assets/images/dice3.png'
import Dice4 from '../assets/images/dice4.png'
import Dice5 from '../assets/images/dice5.png'
import Dice6 from '../assets/images/dice6.png'

export default function Dice() {

    const dices = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
    const randomDice = () => dices[Math.floor(Math.random() * dices.length)];
    const [dice, setDice] = useState(randomDice())
    const clickHandler = () => {
        setDice(dEmpty)
        setTimeout(function () {
            setDice(dice => dice = randomDice())
        }, 1000)
    }

    return (
        <img src={dice} onClick={clickHandler} style={{height: '470px'}} />
    )
}
