import React from 'react'
import './Rating.css'

const Rating = ({children}) => {
    const rating = Math.round(parseFloat(children))
    let stars = ''
    for (let i = 0; i < 5; i++) {
        stars.length < rating ? stars +='★' : stars +='☆'
    }
  return (
    <div className='gradingStars'>
        <h2>{stars} </h2>
    </div>
  )
}

export default Rating