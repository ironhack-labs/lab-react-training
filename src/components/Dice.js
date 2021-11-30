import React from 'react'
import {useState} from 'react'
import diceInitialize from '../assets/images/dice-empty.png'
import diceOne from '../assets/images/dice1.png'
import diceTwo from '../assets/images/dice2.png'
import diceThree from '../assets/images/dice3.png'
import diceFour from '../assets/images/dice4.png'
import diceFive from '../assets/images/dice5.png'
import diceSix from '../assets/images/dice6.png'

export default function Dice() {
    const diceArray = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]
    const setInitialValue = () => {
        return diceInitialize
    }

    const [dice, setDice] = useState(() => setInitialValue())

    const throwDice = () => {
        
        // console.log(Math.floor(Math.random() * 6 ));
        setDice((dice) => diceInitialize)
        setTimeout(() => {
            setDice((dice) => diceArray[Math.floor(Math.random() * 6 )])
          }, 1000)
        
    }

    return (
        <div>
            <h2>Iteration 10</h2>
            <img src={dice} style={{height: '200px', backgroundColor: 'white', borderRadius: '20px'}} onClick={throwDice}/>
        </div>
    )
}
