import React from 'react'

const Dice = (props) => {
  return (
    <div>
      <img onClick={props.changeDice} src={props.diceState} alt="" style={{ width:100 }} />
    </div>
  )
}

export default Dice