import { useState } from 'react'

import './Dice.css'

import diceEmpty from '../../../public/dice-empty.png'
import dice1 from '../../../public/dice1.png'
import dice2 from '../../../public/dice2.png'
import dice3 from '../../../public/dice3.png'
import dice4 from '../../../public/dice4.png'
import dice5 from '../../../public/dice5.png'
import dice6 from '../../../public/dice6.png'


const Dice = () => {
    
    const [diceImage, setDiceImage] = useState(diceEmpty);

    const handleDice = () => {
        
        setDiceImage(diceEmpty);

        setTimeout(() => {
            const randomDiceImage = getRandomDiceImage();
            setDiceImage(randomDiceImage);
        }, 1000);
    };

    const getRandomDiceImage = () => {

        const arrayDice = [dice1, dice2, dice3, dice4, dice5, dice6];

        const randomDice = Math.floor(Math.random() * arrayDice.length);

        return arrayDice[randomDice];
    };

    return (
        <div className='randomDice' onClick={handleDice}>
            <img src={diceImage} alt="" />
        </div>
    );

}


export default Dice
