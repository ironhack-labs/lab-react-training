import React from 'react';
import './index.css'

const Random = (props) => {
  const randomNumber = Math.floor(Math.random() * props.max) + props.min
  return (
    <div className="box">
      <h3>Random value between {props.min} and {props.max} ={'>'} {randomNumber}</h3>
    </div>
  )
}

export default Random