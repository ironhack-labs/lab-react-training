/* Create a Dice component that displays a picture with the random dice value (example: '../assets/images/dice3.png').

Every time the user clicks on the component, it should:

First, display an empty picture ('../assets/images/dice-empty.png')
1 second later, display a new random picture (example: '../assets/images/dice6.png'). */
 
import React, { useState } from 'react';

function Dice() {
    const [dice, setDice] = useState('../assets/images/dice3.png');
    
    const handleClick = () => {
        setDice('../assets/images/dice-empty.png');
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            setDice(`../assets/images/dice${randomNumber}.png`);
        }, 1000);
    };
    
    return (
        <img onClick={handleClick} src={dice} alt="dice images" className='dice' />
    );
}

export default Dice;