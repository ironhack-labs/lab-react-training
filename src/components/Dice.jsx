import React, { useState } from 'react';
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import emptyDice from '../assets/images/dice-empty.png'
import './Dice.css'


const Dice = () => {

    const [img, setimg] = useState(dice3)

    const images = [dice1, dice2, dice3, dice4, dice5, dice6]
    const randomNumber = Math.floor(Math.random() * images.length)

    const newDice = () => {
        setimg(emptyDice)
        setTimeout(() => {
            setimg(images[randomNumber])
        }, 1000);
    };




    return (
        <div className='diceIm'>
            <img src={img} alt="Botón" onClick={newDice} />
        </div>
    )
}





export default Dice

