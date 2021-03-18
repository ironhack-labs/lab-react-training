import React from 'react'
import '../assets/css/Random.css'

const Random = ({min, max}) => {

  function getRandomInt() {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

  return (
    <div className="randomNumber card__container">
      <h3>Random value between {min} and {max} = {getRandomInt()}</h3>
    </div>
  )
}

export default Random
