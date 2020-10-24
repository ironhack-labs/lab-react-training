import React from 'react';


export default function Rating(props) {
  let stars = Math.round(props.children);
  let rating;
  switch (stars) {
    case  1:
      rating = '★☆☆☆☆';
      break;
    case 2:
      rating = '★★☆☆☆';
      break;
    case 3:
      rating = '★★★☆☆';
      break;
    case 4:
      rating = '★★★★☆';
      break;
    case 5:
      rating = '★★★★★';
      break;
    default:
      rating = '☆☆☆☆☆';
  }

  return (
    <div>{rating}</div>
  )
}

