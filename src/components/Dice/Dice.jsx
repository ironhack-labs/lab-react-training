import { useState } from 'react'
import diceEmpty from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'

import './Dice.css'


const Dice = () => {

    const allDice = [dice1, dice2, dice3, dice4, dice5, dice6]

    const randomDice = allDice[Math.floor(Math.random() * allDice.length)]

    const [currentDice, setCurrentDice] = useState(randomDice)

    const rollDice = () => {
        setCurrentDice(diceEmpty)
        setTimeout(() => {
            const randomRollDice = randomDice
            setCurrentDice(randomRollDice)
        }, 1000)
    }

    return (
        <img src={currentDice} className="Dice" onClick={rollDice} alt="dice image" />
    )
}


export default Dice
