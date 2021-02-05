import React from 'react';
import './Rating.css';

const Rating = (props) => {
  const numberOfStars = Math.round(props.children);

  let string = '★';
  string = string.repeat(numberOfStars).padEnd(5, '☆');

  return (
    <div className="m-3">
      <span className="display-4">{string}</span>
    </div>
  );
};

export default Rating;
