import React from 'react'
/*
☆
★
*/
const Rating = ({children}) => {
  const fullStars = Math.round(children);
  let stars = ["☆","☆","☆","☆","☆"];

  stars.splice(0, fullStars);

  for (let i = 0; i < fullStars; i++) {
    stars.unshift("★");
  }

  return (
    <p className='stars'>{stars.join("")}</p>
  )
}

export default Rating