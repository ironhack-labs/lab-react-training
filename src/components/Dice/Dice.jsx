import { useState } from 'react'
import diceEmpty from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'


import './Dice.css'

const Dice = () => {

    const [dice, setDice] = useState(dice1)

    const handleDice = () => {

        setDice(diceEmpty)
        setTimeout(() => rollDice(), 1000)
    }



    const rollDice = () => {

        const result = Math.floor(Math.random() * (6 - 1) + 1)

        switch (result) {
            case 1:
                return setDice(dice1)
            case 2:
                return setDice(dice2)
            case 3:
                return setDice(dice3)
            case 4:
                return setDice(dice4)
            case 5:
                return setDice(dice5)
            case 6:
                return setDice(dice6)
            default:
                return setDice(diceEmpty)
        }

    }

    return (
        <div className="dice">
            <img src={dice} alt="dice" onClick={handleDice} />
        </div>

    )
}

export default Dice