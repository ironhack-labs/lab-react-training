import React from 'react'
import './Rating.css'

const Rating = (props) => {
  let rating = props.children
  let stars = Math.round(rating)
  let result = ''
   for (let i = 1; i <= 5; i += 1) {  
    result += (stars < i ? '☆' : '★')
  }
  return (
    <div className='Rating'>
      {result}
    </div>
  )
}

export default Rating