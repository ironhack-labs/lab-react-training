import { useState, useEffect } from 'react'
import './Dice.css'
import DiceEmpty from '../../assets/images/dice-empty.png'
import Dice1 from '../../assets/images/dice1.png'
import Dice2 from '../../assets/images/dice2.png'
import Dice3 from '../../assets/images/dice3.png'
import Dice4 from '../../assets/images/dice4.png'
import Dice5 from '../../assets/images/dice5.png'
import Dice6 from '../../assets/images/dice6.png'

export default function Dice() {
    let dicesArr = [DiceEmpty, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

    const [diceVal, setDiceVal] = useState(1)

    function randomDice() {
        let randomNum = Math.floor(Math.random() * (7 - 1) + 1)
        setDiceVal(0)
        setTimeout(()=> {
            setDiceVal(randomNum)
        }, 1000)
    }

    return(
        <button onClick={randomDice} className='Dice__button'>
            <img src={dicesArr[diceVal]} alt='randomNumber Dice' className='Dice__dice'/>
        </button>
    )
}