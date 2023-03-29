import React, { useState } from 'react'

function Dice() {

  const [dice, setDice] = useState('/dice3.png');

  const randomDiceNumber = Math.floor(Math.random() * 6) + 1;

  const handleOnClick = () => {
    setDice(prev => '/dice-empty.png');
    setTimeout(() => {
      setDice(prev => `/dice${randomDiceNumber}.png`)
    }, 1000)
  }

  return (
    <img src={dice} alt='Dice' onClick={handleOnClick} style={{width: 150}}/>
  )
}

export default Dice