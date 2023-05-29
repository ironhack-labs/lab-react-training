import { useState } from 'react'
import DiceEmpty from '../assets/images/dice-empty.png'
import DiceOne from '../assets/images/dice1.png'
import DiceTwo from '../assets/images/dice2.png'
import DiceThree from '../assets/images/dice3.png'
import DiceFour from '../assets/images/dice4.png'
import DiceFive from '../assets/images/dice5.png'
import DiceSix from '../assets/images/dice6.png'


export function Dice(){
    const diceArray = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];
    const changeDice = () => {
      setDice(DiceEmpty)
      setTimeout(() => {
       setDice(randomDice());
      },1000)
    }
    const randomDice = () => {
        return diceArray[Math.floor(Math.random() * diceArray.length)]
    }
    const [dice, setDice] = useState(randomDice())
    return(
        <img onClick={changeDice} className='dice' src={dice} style={{cursor: 'pointer'}} alt="" />
    )
}