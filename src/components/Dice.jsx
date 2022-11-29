import './Dice.css'
import { useState } from 'react'
import dice0 from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

const Dice = () => {

  const ArrayImg = [dice1, dice2, dice3, dice4, dice5, dice6]

  const [Dice, setDice] = useState(dice1);

  const updateImg = () => {
    setDice(dice0)
    setTimeout(() => {
      setDice(ArrayImg[Math.floor(Math.random() * 6)])
    }, 1000)
  }

  return (

    <img onClick={updateImg} className='Dice' src={Dice} alt="" />

  )

}

export default Dice