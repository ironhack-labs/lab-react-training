import React from 'react';
import './Rating.css';

const Rating = props => {

  // Display rating stars
  let ratingStars = '';
  let ratingNum = Math.round(props.rating);
  
  switch(ratingNum) {
    case 0: 
      ratingStars = '☆☆☆☆☆';
      break;
    case 1:
      ratingStars = '★☆☆☆☆';
      break;
    case 2:
      ratingStars = '★★☆☆☆';
      break;
    case 3:
      ratingStars = '★★★☆☆';
      break;
    case 4:
      ratingStars = '★★★★☆';
      break;
    case 5:
      ratingStars = '★★★★★';
      break;      
    default:
      ratingStars = 'No rating';
  }

  return (
    <div>
      {ratingStars}
    </div>
  )
}

export default Rating;