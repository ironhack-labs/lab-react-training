

import "./Dice.css"

import DiceEmpty from "../../assets/images/dice-empty.png"
import DiceOne from "../../assets/images/dice1.png"
import DiceTwo from "../../assets/images/dice2.png"
import DiceThree from "../../assets/images/dice3.png"
import DiceFour from "../../assets/images/dice4.png"
import DiceFive from "../../assets/images/dice5.png"
import DiceSix from "../../assets/images/dice6.png"

import { useState } from "react"


const Dice = () => {

    const diceArr = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix]

    const randomDice = diceArr[Math.floor(Math.random() * diceArr.length)]

    const [dice, setDice] = useState(DiceEmpty)

    const handleClick = () => {
        setTimeout(() => {
            setDice(randomDice)
        }, 1000);
    }

    return (
        <img
            className="Dice"
            src={dice}
            onClick={handleClick}
        />
    )

}


export default Dice