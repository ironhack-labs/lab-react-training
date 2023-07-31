import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import { useState } from 'react'

function Dice() {
  const diceFaces = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6]
  const [num, setNum] = useState(0)

  const handleClick = () => {
    const random = Math.floor((Math.random() * (7 - 1)) + 1)
    setTimeout(() => { setNum(random) }, 1000)
  }
  
  return (
    <div className="Dice" onClick={handleClick}>
      <img src={diceFaces[num]} alt="dice-faces" />
    </div>
  )
}

export default Dice