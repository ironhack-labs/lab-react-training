import './Dice.css'
import diceEmpty from "../../assets/images/dice-empty.png"
import dice1 from "../../assets/images/dice1.png"
import dice2 from "../../assets/images/dice2.png"
import dice3 from "../../assets/images/dice3.png"
import dice4 from "../../assets/images/dice4.png"
import dice5 from "../../assets/images/dice5.png"
import dice6 from "../../assets/images/dice6.png"

import { useState } from 'react'


const allDices = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6]


function Dice() {

    const [dice, setDice] = useState(dice1)
    const random = (Math.floor(Math.random() * allDices.length))

    const changeDice = () => {
        setDice(!dice)
    }

    return (
        <div onClick={changeDice}>
            <img className="dice" src={dice ? dice1 : allDices[random]} alt="picture" />
        </div>
    )

}

export default Dice