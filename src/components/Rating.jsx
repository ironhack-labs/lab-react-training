import React from 'react'

function Rating(props) {

    const {children} = props

  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;
  const filledStar = '★';
  const emptyStar = '☆';
  return (
    <div>
      {[...Array(filledStars)].map((_, i) => (
        <span key={i}>{filledStar}</span>))}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={i}>{emptyStar}</span>))}
    </div>

)}

export default Rating