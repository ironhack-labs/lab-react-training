import React from 'react'

export default function Random(props) {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  return (
    <div>
      Random value between {props.min} and {props.max} => {getRndInteger(props.min, props.max)}
    </div>
  )
}
