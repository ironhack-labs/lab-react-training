import { useState } from 'react'
import diceEmpty from '../../assets/images/dice-empty.png'
import diceOne from '../../assets/images/dice1.png'
import diceTwo from '../../assets/images/dice2.png'
import diceThree from '../../assets/images/dice3.png'
import diceFour from '../../assets/images/dice4.png'
import diceFive from '../../assets/images/dice5.png'
import diceSix from '../../assets/images/dice6.png'

const Dice = () => {

    const dice = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]

    const randomDice = dice[Math.floor(Math.random() * dice.length)]

    const [diceFace, setDiceFace] = useState(diceEmpty)

    const handleClick = () => {
        setDiceFace(diceEmpty)

        setTimeout(() => {
            return setDiceFace(randomDice)
        }, "1000");
    }

    return (
        <img src={diceFace} onClick={(handleClick)} style={{ width: 100 }} />
    )
}

export default Dice
