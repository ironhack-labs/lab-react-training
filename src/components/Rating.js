// components/Rating.js

import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Rating = (props) => {
  const { children } = props;
  const filledStars = [...Array(Math.round(children))];
  const emptyStars = [...Array(5 - Math.round(children))];
  return (
    <div className='stars'>
      {filledStars.map((_, index) => <StarIcon key={index + 'filled-star'} fontSize='large' />)}
      {emptyStars.map((_, index) => <StarBorderIcon key={index + 'empty-star'} fontSize='large' />)}
    </div>
  );
}

export default Rating;
