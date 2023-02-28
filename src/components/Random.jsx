import React from 'react'

function Random(props) {
    const {min, max} = props
const num = Math.floor(Math.random() * (max - min) + min)
  return (
    <div className="random">Random value between {min} and {max} => {num}</div>
  )
}

export default Random