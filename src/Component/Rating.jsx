import React from 'react';

const Rating = (props) => {
  const note = Math.round(props.children);
  console.log(note);

  let stars = '';

  switch (note) {
    case 1:
      stars = '★☆☆☆☆';
      break;
    case 2:
      stars = '★★☆☆☆';
      break;
    case 3:
      stars = '★★★☆☆';
      break;
    case 4:
      stars = '★★★★☆';
      break;
    case 5:
      stars = '★★★★★';
      break;
    default:
      stars = '☆☆☆☆☆';
  }

  return <div>{stars}</div>;
};

export default Rating;
