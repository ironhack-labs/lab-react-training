import { useState } from 'react'

import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

export const Dice = () => {
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6]
  let randomNum = Math.floor(Math.random() * 6) + 1

  const [src, setSrc] = useState(dices[randomNum])
  console.log('SRC', src)
  
  const handleClick = () => {
    setTimeout(() => {
      setSrc(src => src = diceEmpty)
    }, 1)
    setTimeout(() => {
      setSrc(src => src = dices[randomNum])
    }, 1000)
  }

  return (
    <div onClick={handleClick}>
      <img src={src} alt="dice" />
    </div>
  )
}
