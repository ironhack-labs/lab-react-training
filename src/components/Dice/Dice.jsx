import './Dice.css'
import { useState } from 'react'
import dice1 from './../../assets/dice1.png'
import dice2 from './../../assets/dice2.png'
import dice3 from './../../assets/dice3.png'
import dice4 from './../../assets/dice4.png'
import dice5 from './../../assets/dice5.png'
import dice6 from './../../assets/dice6.png'

const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6]
const randomPosition = Math.floor(Math.random() * diceArray.length)
const randomDice = diceArray[randomPosition]

const Dice = () => {
    // return <p>hi</p>
    const [diceValue, setDiceValue] = useState(diceArray[Math.floor(Math.random() * 5 + 1)])
    const handleDice = () => {
        setDiceValue(dice1)
        setTimeout(() => {
            const randomDice = diceArray[Math.floor(Math.random() * 5 + 1)]
            setDiceValue(randomDice)
        }, 1000)
    }
    return (
        <div onClick={handleDice}>
            <img src={diceValue} alt="dice" />
        </div>
    )
}

export default Dice






