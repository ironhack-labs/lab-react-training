import React, { useState } from 'react';

const Dice = () => {
    const [faceShown, rollDice] = useState('/img/dice-empty.png');

    const style = {
        cursor: 'pointer'
    }

    return (
        <img 
            style={style}
            src={faceShown}
            alt='click me'
            onClick={() => {
                rollDice('/img/dice-empty.png');
                const face = Math.ceil(Math.random() * 5)
                setTimeout(() => rollDice(`/img/dice${face}.png`), 1000);
            } } />
    );
};

export default Dice;