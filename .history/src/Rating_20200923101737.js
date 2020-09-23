import React from 'react';
import './Rating.css';

function Rating(props) {
  let star = '';
  for (let i = 0; i < 5; i++) {
    if (Math.round(props.children) > i) {
      star += '★';
    } else {
      star += '⭒';
    }
  }
  return <div className="star">{star}</div>;
}

export default Rating;
