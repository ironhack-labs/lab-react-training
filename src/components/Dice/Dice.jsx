import { useState } from 'react'
import diceEmpty from '../../assets/images/dice-empty.png'
import diceOne from '../../assets/images/dice1.png'
import diceTwo from '../../assets/images/dice2.png'
import diceThree from '../../assets/images/dice3.png'
import diceFour from '../../assets/images/dice4.png'
import diceFive from '../../assets/images/dice5.png'
import diceSix from '../../assets/images/dice6.png'
import './Dice.css'

const Dice = () => {

    const diceArray = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]

    const [dice, setDice] = useState(diceEmpty)


    const randomNumber = diceArray[Math.floor(Math.random() * diceArray.length)]


    const handleClick = () => {
        setTimeout(() => {
            setDice(randomNumber)
        }, 1000);
    }

    return (
        <img
            className="Dice"
            onClick={handleClick}
            src={dice}
            alt=""
        />
    )
}

export default Dice
