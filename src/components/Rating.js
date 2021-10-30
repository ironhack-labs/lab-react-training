import React from 'react';

function Rating(props) {
  const ratingStars = Math.round(props.children);

  let stars = '✭';
  stars = stars.repeat(ratingStars);
  return (
    <div>
      <p>{stars}</p>
    </div>
  );
}

export default Rating;
