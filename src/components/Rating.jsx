import React from 'react'
import './Rating.css';
import FontAwesome from 'react-fontawesome'

function ratingStars(number) {
  const compose = []
  for (let index = 0; index < 5; index++) {
    compose.push(index < number ? <FontAwesome key={index} name={'star'} /> : <FontAwesome key={index} name={'star-o'} />)
  }
  return compose
}

function Rating(props) {
  return (
    <div className="rating">
      {!props.children ? <p className="stars">{ratingStars(Math.round(props.rating))}</p> : <p>{props.children} - {ratingStars(Math.round(props.children))}</p>}
    </div>
  )
}

export default Rating