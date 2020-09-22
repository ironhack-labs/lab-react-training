import React from 'react';
import './Rating.css';

function Rating(props) {
  const rate = Math.round(props.children);

  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      stars += '★';
    } else {
      stars += '☆';
    }
  }

  return <div className="Rating">{stars}</div>;
}

export default Rating;
