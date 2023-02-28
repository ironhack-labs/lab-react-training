import React from 'react'

function Random(props) {
    const {min, max} = props
const num = Math.floor(Math.random() * (max - min) + min)
  return (
    <div><p>Random value between {min} and {max} => {num}</p></div>
  )
}

export default Random