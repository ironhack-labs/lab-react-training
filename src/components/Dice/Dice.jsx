import React, {useState} from "react";
import './Dice.css'
import DiceEmpty from './../../assets/images/dice-empty.png'
import DiceOne from './../../assets/images/dice1.png'
import DiceTwo from './../../assets/images/dice2.png'
import DiceThree from './../../assets/images/dice3.png'
import DiceFour from './../../assets/images/dice4.png'
import DiceFive from './../../assets/images/dice5.png'
import DiceSix from './../../assets/images/dice6.png'

function Dice(){
    const [diceChanges, setDiceChanges] = useState(DiceThree)
    const dice = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix]

    const switchDice = () => {
        setDiceChanges(DiceEmpty)
        setTimeout(() => {
            setDiceChanges(dice[Math.floor(Math.random() * dice.length)])
        }, 1000)
    }

    return (
        <div className='Dice'>
            <img onClick={switchDice} src={diceChanges} alt="Dice" />
        </div>
    )
}

export default Dice