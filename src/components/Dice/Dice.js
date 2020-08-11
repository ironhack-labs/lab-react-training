import React, { useState } from 'react'

const Dice = () => {
    const blankDice = './img/dice-empty.png';
    const fullArrayDice = [
        './img/dice1.png',
        './img/dice2.png',
        './img/dice3.png',
        './img/dice4.png',
        './img/dice5.png',
        './img/dice6.png'
    ];
    let randomDice = fullArrayDice[Math.floor(Math.random() * fullArrayDice.length)];

    const [stateDice, setStateDice] = useState(randomDice);
    const handleChange = () => {
        setStateDice(blankDice);
        setTimeout(() => {
            setStateDice(randomDice)
        }, 1000)
    };
    return <img src={stateDice} alt="dice" onClick={handleChange}/>
}

export default Dice
