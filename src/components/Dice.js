import { useState } from "react";

import dice0 from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

export default function Dice() {
    const dices = [dice1, dice2, dice3, dice4, dice5, dice6];
    let randomDice = dices[Math.floor(Math.random() * dices.length)];

    const [dice, setDice] = useState(dices[randomDice]);

    const awaitDice = () => {
        setDice(dice0)
        setTimeout(rollDice, 1000)
    }

    const rollDice = () => {
        const randomNumber = Math.floor(Math.random() * (6 - 1) + 1)
        setDice(dices[randomNumber])
        console.log(dice);
    }

    return (
        <>
            <img onClick={() => { awaitDice() }} src={dice} alt="" width="100px" height="100" />
        </>
    )
}
