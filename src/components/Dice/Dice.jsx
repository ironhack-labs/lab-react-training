import '../App.css'
import { useState } from "react"
import diceEmpty from './../../assets/images/dice-empty.png'
import diceOne from './../../assets/images/dice1.png'
import diceTwo from './../../assets/images/dice2.png'
import diceThree from './../../assets/images/dice3.png'
import diceFour from './../../assets/images/dice4.png'
import diceFive from './../../assets/images/dice5.png'
import diceSix from './../../assets/images/dice6.png'

const Dice = () => {

    const [selectedNumber, setRandomNumber] = useState(diceEmpty)
    const numbers = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]

    const rollDice = () => {
        setRandomNumber(diceEmpty)

        const interval = setInterval(() => {
            const randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
            setRandomNumber(randomNumber)
            clearInterval(interval)
        }, 1000)
    }

    let imgSource = selectedNumber

    return (
        <>
            <img className="Dice" src={imgSource} alt="Dice" onClick={rollDice} />
        </>
    )
}


export default Dice