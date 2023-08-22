import React from 'react';

const Rating = (props) => {
  const { children } = props;

  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push('★');
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push('☆');
  }

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index} style={{ fontSize: '2rem', color: 'goldenrod' }}>
          {star}
        </span>
      ))}
    </div>
  );
};

export default Rating;
