import './Dice.css'
import React, { useState } from 'react'
import emptyDice from '../../assets/Dices/dice-empty.png'
import dice1 from '../../assets/Dices/dice1.png'
import dice2 from '../../assets/Dices/dice2.png'
import dice3 from '../../assets/Dices/dice3.png'
import dice4 from '../../assets/Dices/dice4.png'
import dice5 from '../../assets/Dices/dice5.png'
import dice6 from '../../assets/Dices/dice6.png'

const Dice = () => {
    const dices = [dice1, dice2, dice3, dice4, dice5, dice6]
    const [diceImage, setDiceImage] = useState(emptyDice);

    const handleClick = () => {
        setDiceImage(emptyDice);

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * dices.length);
            const newDiceImage = dices[randomIndex];
            setDiceImage(newDiceImage);
        }, 1000);
    };

    return (
        <div>
            <img src={diceImage} alt="Dice" onClick={handleClick} className='dice' />
        </div>
    )
}

export default Dice;
