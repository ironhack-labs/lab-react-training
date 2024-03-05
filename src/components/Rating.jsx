import React from 'react';

function Rating(props) {
  const rating = Math.round(props.children);

  let stars = '';

  switch (rating) {
    case 0:
      stars = '☆☆☆☆☆';
      break;
    case 1:
      stars = '★☆☆☆☆';
      break;
    case 2:
      stars = '★★☆☆☆';
      break;
    case 3:
      stars = '★★★☆☆';
      break;
    case 4:
      stars = '★★★★☆';
      break;
    case 5:
      stars = '★★★★★';
      break;
    default:
      break;
  }

  return <div className='box'>{stars}</div>;
}

export default Rating;
