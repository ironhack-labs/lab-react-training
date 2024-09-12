import { useState } from 'react';
import diceEmpty from './../../assets/images/dice-empty.png'
import diceOne from './../../assets/images/dice1.png'
import diceTwo from './../../assets/images/dice2.png'
import diceThree from './../../assets/images/dice3.png'
import diceFour from './../../assets/images/dice4.png'
import diceFive from './../../assets/images/dice5.png'
import diceSix from './../../assets/images/dice6.png'

import './Dice.css'

const Dice = () => {

    const [face, setFace] = useState(diceEmpty)

    const diceArr = [diceEmpty, diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]

    const randomDice = diceArr[Math.floor(Math.random() * diceArr.length)]

    const handleClick = () => {
        setFace(diceEmpty)
        setTimeout(() => setFace(randomDice), 1000);
    }

    return (
        <div className="dice">
            <img
                src={face}
                onClick={handleClick}
                className="Dice"
                alt=""
            />
        </div>
    )
}

export default Dice