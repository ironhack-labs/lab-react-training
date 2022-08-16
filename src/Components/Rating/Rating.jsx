import React from 'react';

function Rating(props) {
  const { children } = props;

  let roundedRating = Math.round(children);

  switch (roundedRating) {
    case 0:
      roundedRating = '☆☆☆☆☆';
      break;
    case 1:
      roundedRating = '★☆☆☆☆';
      break;
    case 2:
      roundedRating = '★★☆☆☆';
      break;
    case 3:
      roundedRating = '★★★☆☆';
      break;
    case 4:
      roundedRating = '★★★★☆';
      break;
    case 5:
      roundedRating = '★★★★★';
      break;
    default:
      return 'N/A';
  }

  return (
    <div>
      <p>{roundedRating}</p>
    </div>
  );
}

export default Rating;
