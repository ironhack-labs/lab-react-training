import React from 'react';

export default function Rating(props) {
  let stars = Math.round(props.children);
  let displayStars;

  switch (stars) {
    case 0:
      displayStars = `☆☆☆☆☆`;
      break;
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
  }

  return (<div className='rating'>{displayStars}</div>);
}
