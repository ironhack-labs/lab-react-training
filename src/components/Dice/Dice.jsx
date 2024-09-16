import React, { useState } from 'react';

const Dice = () => {
    const [diceImage, setDiceImage] = useState('/dice-empty.png');

    const rollDice = () => {
        setDiceImage('/dice-empty.png');
        setTimeout(() => {
            const randomValue = Math.floor(Math.random() * 6) + 1;
            const randomDiceImage = `/dice${randomValue}.png`;
            setDiceImage(randomDiceImage);
        }, 1000);
    };

    return (
        <div>
            <img
                src={process.env.PUBLIC_URL + diceImage}
                alt="Dice"
                onClick={rollDice}
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
};

export default Dice;
