import React from 'react';

function Rating(props) {
  const numStar = Math.round(props.children);

  let str1 = '★';
  str1 = str1.repeat(numStar).padEnd(5, '☆');

  return (
    <div>
      <h2>{str1}</h2>
    </div>
  );
}

export default Rating;
