import React from 'react';

function Rating(props) {
  const filledStars = Math.round(props.children);
  const emptyStars = 5 - filledStars;

  const starIcons = [];
  for (let i = 0; i < filledStars; i++) {
    starIcons.push('★');
  }
  for (let i = 0; i < emptyStars; i++) {
    starIcons.push('☆');
  }

  return <div className="stars">{starIcons.join('')}</div>;
}

export default Rating;
