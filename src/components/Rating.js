import React from "react";

const Rating = ({ children }) => {
  const filledStars = Math.round(children);

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index}>{index < filledStars ? '★' : '☆'}</span>
  ));

  return <div>{stars}</div>;
};

export default Rating;
