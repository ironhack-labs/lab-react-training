//jshint esversion:8
import React, { useState } from "react";

import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

export const Dice = () => {

    let [image, setImage] = useState(diceEmpty);

    let dices = [dice1, dice2, dice3, dice4, dice5, dice6];

    let counter = 0;

    function randomDice () {

        counter ++;
        imageClick();        
    }

    function imageClick () {

        if (counter === 1){

            counter--;
            return setImage(image = dices[Math.floor(Math.random() * dices.length)]);
        }

        setTimeout(randomDice, 1000);
        return setImage(image = diceEmpty);
        
    }
    
    return (
        <img onClick={imageClick} src={image} alt="Cool pic" />

    );
};