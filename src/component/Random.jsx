import React from 'react'

function Random (props) {
  let randomNumber = Math.floor(Math.random()*(props.max - props.min) + props.min)

  return (
    <div className = "box random">
    <p> Random value between {props.min} and {props.max} ={'>'} {randomNumber}</p>
    </div>
  )
}

export default Random;
