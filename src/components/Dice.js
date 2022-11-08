import React from 'react'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import diceBlank from '../assets/images/dice-empty.png'
import { useState } from 'react'

 function Dice() {
function randDieRes(){
    return Math.floor(Math.random() * (diceImages.length - 1))
}
const diceImages = [ dice1, dice2, dice3, dice4, dice5, dice6, diceBlank]

const [dieState, setDieState] = useState(randDieRes())
    const handleClick = () => {
    
    setDieState(6)
       setTimeout(() => {
        setDieState(Math.floor(Math.random() * (diceImages.length - 1)))
       }, 1000)
        
    }


  return (
    <div onClick={handleClick}>
       <img src={diceImages[dieState]} alt="" width="250ox"/> 



    </div>
  )
}


export default Dice;
