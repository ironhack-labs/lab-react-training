import React from 'react';
import './Rating.css'

const Rating = (props) => {

  const stars = (rating) => {
    let result = '';
    for (let i = 1; i <= 5; i++) {
      if (i >= 1 && i <= Math.round(rating)) {
        result += '★'
      } else {
        result += '☆'
      }
    }
    return result
  };

  return(
    <div className='Rating'>
      <p>{stars(props.children)}</p>
    </div>
  )
}

export default Rating