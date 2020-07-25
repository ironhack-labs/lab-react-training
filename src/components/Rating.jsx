import React from 'react';

function Rating(props) {
  const roundRating = Math.round(props.children);
  const stars = [];

  for (let i = 0; i < roundRating; i++) {
    stars.push(<span>★</span>);
  }

  for (let i = roundRating; i < 5; i++) {
    stars.push(<span>☆</span>);
  }

  return <div>{stars}</div>;
}

export default Rating;
