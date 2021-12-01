import React, {useState} from 'react';

import dice0 from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';


function Dice() {

    const dices = [dice1, dice2, dice3, dice4, dice5, dice6]
    const getRandomDice = () => dices[Math.floor(Math.random() * dices.length)];

    const throwDice = () => {
        setTimeout(function () {
            setDice(getRandomDice);
        }, 1000);
        setDice(dice0);
    };
    const [dice, setDice] = useState(getRandomDice)

    return (
        <img style={{height: '3rem', margin: '1rem'}}
             src={dice}
             onClick={throwDice}>
        </img>
    );
}

export default Dice;