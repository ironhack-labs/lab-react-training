/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Dice() {
    const [diceImage, setDiceImage] = useState("../images/dice3.png");
    const diceImages = [
        "../images/dice1.png",
        "../images/dice2.png",
        "../images/dice3.png",
        "../images/dice4.png",
        "../images/dice5.png",
        "../images/dice6.png",
    ];

    const rollDice = () => {
        setDiceImage("../images/dice3.png");
        const randomDice = Math.floor(Math.random() * diceImages.length);
        setTimeout(() => {
            setDiceImage(diceImages[randomDice]);
        }, 1000);
    };

    return (
        <div>
            <img src={diceImage}  />
            <button onClick={rollDice}>Get Luck!</button>
        </div>
    );
}

export default Dice;