import React from 'react';
import './Rating.css'

function Rating(props) {
  let stars = Math.round(props.children);
  let displayStars;

  switch (stars) {
    
    case 1:
      displayStars = `★☆☆☆☆`;
      break;
    case 2:
      displayStars = `★★☆☆☆`;
      break;
    case 3:
      displayStars = `★★★☆☆`;
      break;
    case 4:
      displayStars = `★★★★☆`;
      break;
    case 5:
      displayStars = `★★★★★`;
      break;
    default :
    displayStars = `☆☆☆☆☆`;
  }

  return (
    <div className='rating'>
        <h1>
          {displayStars}
        </h1>
    </div>);
}

export default Rating;