import React, { useState } from 'react';

export default function Dice() {

    const [dice, setDice] = useState(getRandomDice);

    function getRandomDice() {
        return `./img/dice${Math.round(Math.random() * (6 - 1) + 1)}.png`
    }

    return (
        <div className='diceCont'>
            <img src={dice} onClick={
                (e) => {
                    setDice('./img/dice-empty.png');
                    setTimeout(() => {
                        setDice(getRandomDice);
                    }, 1000);
                }
            }/>
        </div>
    )

}