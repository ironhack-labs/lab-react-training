  
import React from 'react'

export function Rating({children}) {
  const stars = getStars(children);

  return (
    <div className='rating-container'>
      <p>{stars}</p>
    </div>
  )
}

function getStars(rating) {
  const stars = Math.round(rating);
  let starsString = '';

  for (let index = 0; index < 5; index++) {
      if (index < stars) {
          starsString += '★';
      } else {
          starsString += '☆';
      }
  }

  return starsString;
}