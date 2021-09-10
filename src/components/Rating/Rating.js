import React from 'react';
import './Rating.css';

const Rating = ({ children }) => {
  let rounded = Math.round(children);

  const showStars = (rating) => {
    let full = '/img/Star-Filled.png';
    let empty = '/img/Start-Empty.png';
    let arr = [];

    for (let i = 0; i < 5; i++) {
      i < rating ? arr.push(full) : arr.push(empty);
    }
    return arr;
  };

  console.log(showStars());

  return (
    <div className="RatingAll">
      <p>
        {showStars(rounded).map((x) => (
          <img src={x} width="40px" alt="" />
        ))}
      </p>
    </div>
  );
};

export default Rating;
