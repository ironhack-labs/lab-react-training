import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

import { useState } from 'react';

function Dice () {
    
    const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6]
    const diceEmpt = diceEmpty;

    const random = (max) => {
        return Math.floor(Math.random() * max)
    } 

    const [dice, setDice] = useState(diceEmpt);

    const trowDice = () => {
        if (dice === diceEmpt){
            let randomDice = random(diceArr.length);
            setDice(diceArr[randomDice]);
        } else {
            setDice(diceEmpt)
        }
    }
    
    return(
        <div>
            <img src={dice} onClick={trowDice} style={{width:100, height:100}} alt='dice' />
        </div>
    );
};

export default Dice;