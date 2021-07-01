import React from 'react';

const rating = (props) => {
  const number = Math.round(props.children);

  if (number === 0) {
    return <p>☆☆☆☆☆</p>;
  } else if (number === 1) {
    return <p>★☆☆☆☆</p>;
  } else if (number === 2) {
    return <p>★★☆☆☆</p>;
  } else if (number === 3) {
    return <p>★★★☆☆</p>;
  } else if (number === 4) {
    return <p>★★★★☆</p>;
  } else if (number === 5) {
    return <p>★★★★★</p>;
  }

  return <p> {number}</p>;
};

export default rating;
