import React from 'react';

function Rating(props) {
  let rate = Math.ceil(Number(props.children));
  if (rate === 0) {
    return <p>☆☆☆☆☆</p>;
  } else if (rate === 1) {
    return <p>★☆☆☆☆</p>;
  } else if (rate === 2) {
    return <p>★★☆☆☆</p>;
  } else if (rate === 3) {
    return <p>★★★☆☆</p>;
  } else if (rate === 4) {
    return <p>★★★★☆</p>;
  } else {
    return <p>★★★★★</p>;
  }
}

export default Rating;
