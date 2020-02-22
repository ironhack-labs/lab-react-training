import React from "react";

const Rating = (props) => {
  const number = Math.round(Number(props.children));
  const complement = 5 - number;
  const emptyStar = "☆";
  const fullStar = "★";

  return (
    <div className="Rating">{fullStar.repeat(number) + emptyStar.repeat(complement)}</div>
  );
};

export default Rating;