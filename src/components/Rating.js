// components/Rating.js

import React from 'react';

const Rating = (props) => {
  const { children } = props;
  const filledStars = [...Array(Math.round(children))];
  const emptyStars = [...Array(5 - Math.round(children))];
  return (
    <div class='stars'>
      {filledStars.map(() => <img alt='filled star' src='/img/star-filled.svg' />)}
      {emptyStars.map(() => <img alt='empty star' src='/img/star-empty.svg' />)}
    </div>
  );
}

export default Rating;
