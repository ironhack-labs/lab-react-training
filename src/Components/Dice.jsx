import React, { useState } from 'react'
import styled from "styled-components"

const DiceStyle = styled.div`
    width: 300px;
    height: 300px;
`

const Dice = () => {
    const dices = [
        '../img/dice-empty.png',
        '../img/dice1.png',
        '../img/dice2.png',
        '../img/dice3.png',
        '../img/dice4.png',
        '../img/dice5.png',
        '../img/dice6.png'
    ]

    let [dice, setDice] = useState(dices[0])

    const handleDiceClick = () => {
        setDice(dices[0])
        setTimeout(() => {
            const randomIndex = Math.round(Math.random() * 5) + 1
            setDice(dices[randomIndex])
        }, 1000)
    }

    return (
        <DiceStyle>
            <button onClick={handleDiceClick}>
                <img src={dice} alt="Dice" style={{ width: "100%" }} />
            </button>
        </DiceStyle>
    )
}

export default Dice
