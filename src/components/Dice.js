import React, { useState } from 'react'

function Dice() {
    const [dice, setDice] = useState(1)
    let randomDice;
    const handleDice = () => {
        randomDice = Math.floor(Math.random() * (6 - 1) + 1)
        setDice('-empty')
        setTimeout(() => {
            setDice(randomDice)
        }, 1000)
    }

    return (
        <div>
            <img className="diceImage" src={`../img/dice` + dice + '.png'} alt="Dice" onClick={() => handleDice()}/>
        </div>
    )
}

export default Dice
