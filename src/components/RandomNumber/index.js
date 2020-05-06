import React from 'react'

const RandomNumber = (props) => {
  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} =
        {Math.floor(Math.random() * (props.max - props.min) + props.min)}
      </p>
    </div>
  )
}

export default RandomNumber
