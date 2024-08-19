import { useState } from 'react';
import dice_empty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

/* eslint-disable react/prop-types */
function Dice() {
    const [ dice, setDice ] = useState(dice_empty);

    function rollDice() {
        const newValue = Math.floor(Math.random() * 6) + 1
        let newImage
        switch(newValue) {
            case 1: newImage = dice1; break
            case 2: newImage = dice2; break
            case 3: newImage = dice3; break
            case 4: newImage = dice4; break
            case 5: newImage = dice5; break
            case 6: newImage = dice6; break
        }
        setDice(dice_empty);
        setTimeout(() => {
            setDice(newImage);
        }, 1000);
    }

    return (
        <div onClick={rollDice}>
            <img src={dice} width="200px"></img>
        </div>
    )
}

export default Dice