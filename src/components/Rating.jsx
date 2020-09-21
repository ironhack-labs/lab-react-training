import React from 'react'
import './Rating.css'


const Rating = (props) => {
  
  let rating = ""

  for (let i = 0; i < 5; i++){
    Math.round(props.children) > i ? rating += "★" : rating +="☆"
  }

  return (
      <div className = "Rating">
          {rating}
      </div>
  )
}

export default Rating