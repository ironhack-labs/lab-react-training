import React from 'react'
import '../assets/css/Random.css'

const Random = ({ min, max}) => {

    const number= Math.floor(Math.random() * (max - min) + min)
    
    return (
      <div className='Random'>
          <h3>Random value between {min} and {max} = {number}</h3>
      </div>
    )
  }

export default Random 