import { useState } from 'react'

import './Dice.css'

import empty from "../../../assets/images/dice-empty.png"
import dice1 from "../../../assets/images/dice1.png"
import dice2 from "../../../assets/images/dice2.png"
import dice3 from "../../../assets/images/dice3.png"
import dice4 from "../../../assets/images/dice4.png"
import dice5 from "../../../assets/images/dice5.png"
import dice6 from "../../../assets/images/dice6.png"


const allDices = [empty, dice1, dice2, dice3, dice4, dice5, dice6]




const Dice = () => {

    const [showDice, setShowDice] = useState()

    const RandomDice = Math.floor(Math.random() * allDices.length)

    const changeDice = () => setShowDice(!showDice)
    return (
        <div onClick={changeDice}>
            <img src={showDice ? empty : allDices[RandomDice]}></img>
        </div>
    )
}



export default Dice

