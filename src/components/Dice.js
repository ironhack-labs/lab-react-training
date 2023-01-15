import React, { useState } from "react";

import D0 from '../images/0 dice.png'
import D1 from '../images/dice (1).jpg'
import D2 from '../images/dice (2).jpg'
import D3 from '../images/dice (3).jpg'
import D4 from '../images/dice (4).jpg'
import D5 from '../images/dice (5).jpg'
import D6 from '../images/dice (6).jpg'


const DiceChange = () => {
    const dice = [D1, D2, D3, D4, D5, D6]
    const randomDice = () => {
        return dice[Math.floor(Math.random() * dice.length)]
    }

    const [diceValue, setDiceValue] = useState(randomDice());

    const handleClick = () => {
        setDiceValue(D0)
        setTimeout(() => setDiceValue(randomDice()), 1000)
    }

    return (
        <div className="dice" >
            <img src={diceValue} alt='changing-dice' onClick={handleClick} />
        </div >
    )
}

export default DiceChange