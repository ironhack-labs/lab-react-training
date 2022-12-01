import React from 'react'

const Rating = props => {
    const star = '✬'
    const star2 = '☆'
    return (
      <div className="Rating">
        <h2>{star.repeat(Math.round(props.children))}{star2.repeat(5 - Math.round(props.children))}</h2>
      </div>
    )
  }
  
  export default Rating;