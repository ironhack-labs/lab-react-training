import React from 'react'

const Rating = props => {
  let rating = Math.round(props.children)
  let stars = []

  for (let i = 0; i <= rating - 1; i++) {
    stars.push('★')
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push('☆')
  }
  
  return (
    <div>
      <p>{stars.join('')}</p>
    </div>
  )

} 

export default Rating
