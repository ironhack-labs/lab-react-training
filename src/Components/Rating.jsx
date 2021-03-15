import React from 'react'

const Rating = (props) => {
  // There's probably a simpler way but I can't think of any right now
  function checkRating(num) {
    let rating = "";
    let i;
    if (num === 0) rating = "☆☆☆☆☆";
    if (num === 5) rating = "★★★★★";
    if (num !== 0 && num !== 5) {
        for (i = 0; i < num; i++) {
          rating += "★";
        }
        if (num < 5) {
          for (let j = i+1; j <= 5; j++) {
            rating += "☆";
          }
        }
    }
    return rating;
  }

  return (
    <div style={{fontSize: "3em"}}>
      {checkRating(Math.round(props.children))}
    </div>
  )
}

export default Rating
