import React from 'react';
import './rating.css';

function Rating(props) {
  const rate = Math.round(Number(props.children));
  let rateStars = [...new Array(5)]
    .map((el, i) => (rate >= i + 1 ? '★' : '☆'))
    .join('');
  console.log(props);
  return (
    <div style={props.style} className="rate-stars">
      {rateStars}
    </div>
  );
}

export default Rating;

//☆★
