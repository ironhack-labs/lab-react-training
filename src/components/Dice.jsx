import React, { useState } from 'react'

import emptyDiceImage from "../assets/images/dice-empty.png"
import dice1Image from "../assets/images/dice1.png"
import dice2Image from "../assets/images/dice2.png"
import dice3Image from "../assets/images/dice3.png"
import dice4Image from "../assets/images/dice4.png"
import dice5Image from "../assets/images/dice5.png"
import dice6Image from "../assets/images/dice6.png"




const Dice = () => {
    const imgSrcs = [
        emptyDiceImage,
        dice1Image,
        dice2Image,
        dice3Image,
        dice4Image,
        dice5Image,
        dice6Image
    ]
    const [ diceImage, setDiceImage ] = useState(imgSrcs[1])
    const handleClick = () => {
        setDiceImage(imgSrcs[0])

        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6)+1;
            setDiceImage(imgSrcs[randomNumber])
            
        }, 1000);
    }


    return(
        <div>
            <img className="dice" src={diceImage} alt="dice" onClick={handleClick} />
        </div>
    )
}

export default Dice