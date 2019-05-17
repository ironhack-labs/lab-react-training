import React from 'react';

import './Rating.css';

const Rating = (props) => {
  let starsGiven = Math.round(props.children);
  let rating = ''
  for (let i = 1; i <= 5; i++) {
    rating += (starsGiven < i ? '☆' : '★');
  }
  
  return (
   <p className="rating-stars">{rating}</p>
  )
}

export default Rating;