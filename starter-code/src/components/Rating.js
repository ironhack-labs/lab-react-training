import React from "react";

const rate = rating => {
  const filledStars = Math.round(rating);
  let stars = "";
  for (let index = 0; index < 5; index++) {
    if (index < filledStars) stars += String.fromCharCode('9733');
    else stars += String.fromCharCode('9734');
  }
  console.log(stars);
  return stars;
};

const Rating = ({ children }) => <div className="star">{rate(children)}</div>;

export default Rating;
