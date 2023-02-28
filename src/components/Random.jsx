import React from 'react'

function Random(props) {

const {min, max} = props

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  return (
    <h2>Random value between {min} and {max} => {randomNumber(min, max)}</h2>
  )
}
export default Random