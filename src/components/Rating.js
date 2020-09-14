import React from 'react';

export default function Rating(props) {
  let rating = String(Math.round(props.children));
  let stars;
  switch (rating) {
    case '0':
      stars = '☆☆☆☆☆';
      break;
    case '1':
      stars = '⭐☆☆☆☆';
      break;
    case '2':
      stars = '⭐⭐☆☆☆';
      break;
    case '3':
      stars = '⭐⭐⭐☆☆';
      break;
    case '4':
      stars = '⭐⭐⭐⭐☆';
      break;
    case '5':
      stars = '⭐⭐⭐⭐⭐';
      break;

    default:
      break;
  }
  return (
    <>
      {stars}
      <br></br>
    </>
  );
}
