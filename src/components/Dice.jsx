import React, { useState } from 'react'
import emptyDice from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

export default function Dice() {

  const diceOptions = [dice1, dice2, dice3, dice4, dice5, dice6]
  const randomNum = Math.floor(Math.random() * 6)

  const [diceNum, setDice] = useState(diceOptions[randomNum])

  const handleDiceClick = () => {
    setDice(emptyDice)
    setTimeout(() => {
      setDice(diceOptions[randomNum])
    }, 1000)
  }

  return (
    <div className='flex justify-center items-center my-2'>
      <img className='w-12' src={diceNum} alt={randomNum} onClick={handleDiceClick}></img>
    </div>
  )
}
