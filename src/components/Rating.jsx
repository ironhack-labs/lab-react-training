import React from 'react';

const Rating = (props) => {
  let stars = '';
  let nb = Math.round(props.children);
  if (nb === 0) {
    stars = '☆☆☆☆☆';
  } else {
    for (let i = 1; i <= nb; i++) {
      stars += '★';
    }
    for (let i = nb + 1; i <= 5; i++) {
      stars += '☆';
    }
  }
  return <div>{stars}</div>;
};
// ☆
// ★

export default Rating;
