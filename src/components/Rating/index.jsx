import React from "react";
import "./index.css";

function Rating({children}) {
  const starImage = '★'
  const emptyStarImage = '✰'
  const numberStar = Math.round(children)
  const numberStarEmpty = 5 - numberStar
  const totalRating = `${starImage.repeat(numberStar)}${emptyStarImage.repeat(numberStarEmpty)}`
  return <h1 className="Rating">{totalRating}</h1>
}

export default Rating