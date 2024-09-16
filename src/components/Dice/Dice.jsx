import './Dice.css'
import { useState } from 'react'

import die0 from './../../assets/images/dice-empty.png'
import die1 from './../../assets/images/dice1.png'
import die2 from './../../assets/images/dice2.png'
import die3 from './../../assets/images/dice3.png'
import die4 from './../../assets/images/dice4.png'
import die5 from './../../assets/images/dice5.png'
import die6 from './../../assets/images/dice6.png'


const Dice = () => {

    const diceArray = [die0, die1, die2, die3, die4, die5, die6]

    const getRandomDieImage = () => {
        const dieIndex = Math.floor(Math.random() * diceArray.length)
        const randomDie = diceArray[dieIndex]
        return randomDie
    }

    const [die, setDieState] = useState(getRandomDieImage())

    const handleClick = () => {

        setDieState(die)
        setTimeout(() => {
            setDieState(getRandomDieImage());
        }, 1000)
    }

    return (
        <div className="diceBox" onClick={handleClick}>
            <img className="die" src={die} alt="Die" />
        </div>
    )
}

export default Dice
