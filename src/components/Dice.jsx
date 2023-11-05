import "../styles/Dice.css"
import { useState } from "react"
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

export default function Dice() {
    const [dice, setDice] = useState(dice3)
    const myDices = [dice1, dice2, dice3, dice4, dice5, dice6]

    function delay(milliseconds){
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }

    async function diceSequence() {
        setDice(diceEmpty)
        await delay(1000)
        setDice(myDices[Math.floor(Math.random() * 5)])
    }

    return (
        <div className="Dice">
            <img onClick={() => diceSequence()} src={dice} alt='dice' />
        </div>
    )
}