import React from 'react';

import './Ratings.css'

const Rating = (props) => {
  const displayStars = () => {
    const fullStar = '★';
    const emptyStar = '☆';
    const numFullStars = Math.round(props.children);
    const numEmptyStars = 5 - Math.round(props.children);
    return `${fullStar.repeat(numFullStars)}${emptyStar.repeat(numEmptyStars)}`;
  };
  return <div className='stars'>{displayStars()}</div>;
};

export default Rating;
