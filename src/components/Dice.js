import React, { useState } from 'react';

function Dice() {
    const [ randomImage, setRandomImage ] = useState("img/dice-empty.png");

    const selectRandomImage = () => {
        setRandomImage("img/dice-empty.png")
        setTimeout(() => {
            let randomNumber = Math.ceil(Math.random() * 6);
            setRandomImage(`img/dice${randomNumber}.png`)
        }, 1000)
    }

    return (
        <div className="iteration-container">
            <img src={randomImage} onClick={selectRandomImage} className="dice-img" alt="Dice"></img>
        </div>
    )
}

export default Dice;
