import React from 'react';

export default function Rating({ children }) {
  let rating = '';
  let emptyStars = 5 - Math.round(children);
  for (let i = 0; i < Math.round(children); i++) {
    rating += `\u2605`;
  }
  for (let i = 0; i < emptyStars; i++) {
    rating += `\u2606`;
  }
  return (
    <div style={{display:'flex'}}>
      <p>{rating}</p>
    </div>
    )
}
