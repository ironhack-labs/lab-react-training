import React from 'react';

function Rating(props) {
  const { children } = props;
  const finalRating = [];
  const upRating = Math.ceil(reating);

  for (let i = 0; i <= children; i++) {
    i < upRating ? finalRating.push('★') : finalRating.push('☆');
  }
}
return (
  <div>
    <p>{finalRating}</p>
  </div>
);

export default Rating;
