import React from 'react';
import '../App.css';

function Rating(props) {
  const { children } = props;
  const roundedRating = Math.round(children);

  const starsEmpty = `☆☆☆☆☆`;
  const starEmpty = `☆`;
  const starsFull = `★★★★★`;
  const starFull = `★`;
  return (
    <div>
      {starsFull.slice(0, roundedRating)}
      {starsEmpty.slice(0, 5 - roundedRating)}
      {/* <div>
        {starFull.repeat(roundedRating)}
        {starEmpty.repeat(5 - roundedRating)}
      </div> */}
    </div>
  );
}

export default Rating;
