import { useState } from 'react'
import diceEmpty from '../../assets/dice-empty.png'
import diceOne from '../../assets/dice1.png'
import diceTwo from '../../assets/dice2.png'
import diceThree from '../../assets/dice3.png'
import diceFour from '../../assets/dice4.png'
import diceFive from '../../assets/dice5.png'
import diceSix from '../../assets/dice6.png'

function Dice() {
    const dices = [diceEmpty, diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]
    const [dice, setDice] = useState(dices[0])

    const throwDice = () => {
        const randomIndex = Math.floor(Math.random() * (dices.length - 1) + 1)
        setDice(dices[randomIndex])
    }

    return (
        <img onClick={throwDice} src={dice} alt="" />
    )
}

export default Dice