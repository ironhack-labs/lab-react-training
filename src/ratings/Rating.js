import React from 'react';

function Rating(props) {
  const rate = Math.round(props.children);

  let rating = '';
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      rating += '★';
    } else {
      rating += '☆';
    }
  }
  return (
    <div>
      <p>{rating}</p>
    </div>
  );
}

export default Rating;
