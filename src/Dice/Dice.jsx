import './Dice.css'
import { useState } from 'react'
import dice0 from './../assets/images/dice-empty.png'
import dice1 from './../assets/images/dice1.png'
import dice2 from './../assets/images/dice2.png'
import dice3 from './../assets/images/dice3.png'
import dice4 from './../assets/images/dice4.png'
import dice5 from './../assets/images/dice5.png'
import dice6 from './../assets/images/dice6.png'

function Dice() {
    const [diceNum, setDiceNum] = useState(dice0)

    const dices = [dice1, dice2, dice3, dice4, dice5, dice6]

    function randomDice() {
        let randomNum = Math.floor(Math.random() * dices.length)
        setDiceNum(dice0)
        setTimeout(() => {
            setDiceNum(dices[randomNum])
        }, 1000);

    }


    return (
        <img src={diceNum} onClick={randomDice} ></img>
    )
}


export default Dice