import React from "react";

const Rating = ({ children }) => {
  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

  const filledStar = "★";
  const emptyStar = "☆";

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(filledStar);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(emptyStar);
  }
  return (
    <div>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;
