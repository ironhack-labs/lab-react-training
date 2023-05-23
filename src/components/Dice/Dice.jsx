import './Dice.css'
import { useState } from "react"
import diceEmpty from './../../assets/images/dice-empty.png'
import diceOne from './../../assets/images/dice1.png'
import diceTwo from './../../assets/images/dice2.png'
import diceThree from './../../assets/images/dice3.png'
import diceFour from './../../assets/images/dice4.png'
import diceFive from './../../assets/images/dice5.png'
import diceSix from './../../assets/images/dice6.png'

const diceArray = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]

const Dice = () => {
    const [diceValue, setDicessValue] = useState(diceEmpty)
    const changeDice = () => {
        setDicessValue(diceEmpty)
        setTimeout(() => {
            const randomDice = diceArray[Math.floor(Math.random() * 6)]
            setDicessValue(randomDice)
        }, 1000)

    }
    return (
        <img onClick={changeDice} src={diceValue} alt="Random Dice" />
    )
}

export default Dice