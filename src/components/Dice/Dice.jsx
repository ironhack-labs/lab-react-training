import { useState } from "react"
import './Dice.css'

import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'
import empty from './../../assets/images/dice-empty.png'


function Dice() {
    let randomNumber = Math.round(Math.random() * (6 - 1) + 1)
    console.log(randomNumber)

    const dices = [dice1, dice2, dice3, dice4, dice5, dice6]
    const [DiceValue, setDiceValue] = useState(empty)

    const changeDice = () => {
        setDiceValue(empty)
        setTimeout(() => {
            setDiceValue(dices[randomNumber])
        }, 1000);


    }

    return (
        <>
            <img onClick={changeDice} src={DiceValue} alt="image" className="Dice" />
        </>
    )
}

export default Dice