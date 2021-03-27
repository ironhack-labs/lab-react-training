import React, { useState } from 'react'
import './Dice.scss'

const Dice = () => {
    const [dice, setDice] = useState('dice1')

    const onClick = () => {
        const dices = ['dice-empty', 'dice1', 'dice2', 'dice3', 'dice4', 'dice5', 'dice6']
        const randomDice = Math.ceil(Math.random() * 6)

        setDice(dices[0])

        setTimeout(() => {
            setDice(dices[randomDice])
        }, 100
        )
    }

    return (
        <div className="Dice">
        <h5>Try your luck -></h5>
            <img src={`/img/${dice}.png`} alt="dice" onClick={onClick}/>
        </div>
    )
}

export default Dice
