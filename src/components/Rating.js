import React from 'react'

function Rating({children}) {
    const filledStars = Math.round(children);
    const emptyStars = 5 - filledStars;
  
    const starIcons = [];
    for (let i = 0; i < filledStars; i++) {
      starIcons.push('★');
    }
    for (let i = 0; i < emptyStars; i++) {
      starIcons.push('☆');
    }
  return (
    <div>{starIcons.join('')}</div>
  )
}

export default Rating