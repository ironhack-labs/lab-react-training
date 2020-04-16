import React from "react";

const Rating = props => {
  const stars = rating => {
    let roundRate = Math.round(rating);
    if (roundRate === 0) return "☆☆☆☆☆";
    if (roundRate === 1) return "★☆☆☆☆";
    if (roundRate === 2) return "★★☆☆☆";
    if (roundRate === 3) return "★★★☆☆";
    if (roundRate === 4) return "★★★★☆";
    if (roundRate === 5) return "★★★★★";
  }
  return (
    <div>
    {stars(props.children)}
    </div>
  )
}

export default Rating;