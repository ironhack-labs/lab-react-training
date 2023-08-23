import './Dice.css'
import diceEmpty from './../../assets/dice-empty.png'
import dice1 from './../../assets/dice1.png'
import dice2 from './../../assets/dice2.png'
import dice3 from './../../assets/dice3.png'
import dice4 from './../../assets/dice4.png'
import dice5 from './../../assets/dice5.png'
import dice6 from './../../assets/dice6.png'
import john from './../../assets/john.jpg'
import { useState } from 'react'

const diceArray = [dice5, john]
const initialValue = 0

const Dice = () => {

    const [dice, setDice] = useState(diceArray[initialValue])

    const handleDice = () => {

        const randomIndex = Math.floor(Math.random() * diceArray.length)

        setDice(diceEmpty)

        setTimeout(() => {
            setDice(diceArray[randomIndex])
        }, 1000)
    }

    return (
        <div className="Dice" onClick={handleDice}>
            <img src={dice} alt="dice" />
        </div>
    )
}

export default Dice

