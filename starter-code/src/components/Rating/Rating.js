import React from 'react';
import './Rating.css';

const Rating = ({ rating }) => {
  let rt = Math.round(rating);
  let txt = '★'.repeat(rt) + '☆'.repeat(5-rt);
  return (
    <div className='rating'>
      {txt}
    </div>
  );
};

export default Rating;
