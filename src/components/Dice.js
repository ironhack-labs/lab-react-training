import React, { useEffect, useState } from 'react'
import dice0 from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

let timeout
const dices = [dice0, dice1, dice2, dice3, dice4, dice5, dice6]

function Dice() {
  const [dice, setDice] = useState(2)

  useEffect(() => {
    return clearTimeout(timeout)
  }, [])

  const handleClick = () => {
    setDice(() => 0)

    timeout = setTimeout(() => {
      setDice(() => Math.floor(Math.random() * 5 + 1))
    }, 1000)
  }

  return (
    <div onClick={handleClick} className="d-flex ms-3">
      <img src={dices[dice]} alt="" style={{width: '250px'}}/>
    </div>
  )
}

export default Dice