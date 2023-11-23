import { useState } from "react";
import dice0 from '../assets/dice-empty.png'
import dice1 from '../assets/dice1.png'
import dice2 from '../assets/dice2.png'
import dice3 from '../assets/dice3.png'
import dice4 from '../assets/dice4.png'
import dice5 from '../assets/dice5.png'
import dice6 from '../assets/dice6.png'



const Dice = () => {
    const dices = [dice0, dice1, dice2, dice3, dice4, dice5, dice6]
    const [dice, setDice] = useState(dices[0])
    const rollDice = () => {
        const random = Math.floor(Math.random() * (dices.length - 1) + 1)
        setDice(dices[random])
    }

    return (
        <img onClick={rollDice} src={dice} alt=""></img>
    )

}


export default Dice 
