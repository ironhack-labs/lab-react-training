import React, { useState } from 'react'

function Dice() {
  const [imageDice, setImageDice] = useState("/dice3.png");


  const random = Math.floor((Math.random() * 6) + 1)



  const handleClick = () => {
    setImageDice(prev =>
      prev = "/dice-empty.png")

    setTimeout(function () {
      setImageDice(prev => prev = `/dice${random}.png`)
    }, 1000)

  }


  return (
    <div onClick={handleClick}>
      <img src={imageDice} style={{ width: 100 }} alt="dice" />
    </div>
  )
}

export default Dice