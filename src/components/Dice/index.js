import React from 'react'

const Dice = (props) => {
  return (
    <div>
      <img onClick={props.changeDice} src={props.diceState} alt="" />
    </div>
  )
}

export default Dice
