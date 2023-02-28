import React from 'react'

function Dice(props) {
    const {diceFunction, dice} = props;

   
  return (
    <div>
       <button onClick={() => diceFunction()}><img className ="dice" src={dice} alt="" /></button>
    </div>
  )
}

export default Dice