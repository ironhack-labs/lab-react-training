import React from 'react'
import '../assets/css/Random.css'

const Random = ({ min, max}) => {

    let randomNum;
    const getRandom = () => {
        randomNum= Math.round( min + Math.random() * (max - min))
        return randomNum
    }
    return (
      <div className='Random'>
          <h3>Random value between {min} and {max} = {getRandom()}</h3>
      </div>
    )
  }

export default Random