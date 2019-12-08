import React from "react";

function Rating(props){
  let rate;
  switch (Math.round(props.children)) {
    case 0: rate = "☆ ☆ ☆ ☆ ☆";
      break;
    case 1: rate = "★ ☆ ☆ ☆ ☆";
      break;
    case 2: rate = "★ ★ ☆ ☆ ☆";
      break;
    case 3: rate = "★ ★ ★ ☆ ☆";
      break;
    case 4: rate = "★ ★ ★ ★ ☆";
      break;
    case 5: rate = "★ ★ ★ ★ ★";
      break;
    default: rate = "☆ ☆ ☆ ☆ ☆"
  }
  return <div className="Rating">{rate}</div>
}
export default Rating;