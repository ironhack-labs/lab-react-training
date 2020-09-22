import React from 'react';
import './Rating.css';

const Rating = (props) => {
  console.log(Math.round(props.children));
  let resRating = '';
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(props.children)) resRating += '★';
    else resRating += '☆';
  }

  return (
    <div className="rating">
      <p> {resRating} </p>
    </div>
  );
};

export default Rating;