import React, { useState } from 'react'

const Dice = () => {

    const emptyDice = '../../img/dice-empty.png';
    
    const numberedDice = [
        '../../img/dice1.png',
        '../../img/dice2.png',
        '../../img/dice3.png',
        '../../img/dice4.png',
        '../../img/dice5.png',
        '../../img/dice6.png'
    ]

    const randomDice = numberedDice[Math.floor(Math.random() * numberedDice.length)];

    const [diceState, setDiceState] = useState(randomDice)

    const handleChange = () => {
        setDiceState(emptyDice);
        setTimeout(() => {
            setDiceState(randomDice);
        }, 1000)
    }
    
    return (
        <div>
            <button className="picBtn"><img className="dice" src={diceState} onClick={handleChange} /></button>
        </div>
    )
}

export default Dice
