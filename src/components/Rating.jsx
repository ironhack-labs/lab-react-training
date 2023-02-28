import React from 'react';

function Rating(props) {
  const { children } = props;

  function addStar(number) {
    if (number < 1) return '☆☆☆☆☆';
    else if (number >= 1 && number <= 1.49) return '★☆☆☆☆';
    else if (number >= 1.5 && number <= 2.49) return '★★☆☆☆';
    else if (number >= 2.5 && number <= 3.49) return '★★★☆☆';
    else if (number >= 3.5 && number <= 4.49) return '★★★★☆';
    else if (number >= 4.5) return '★★★★★';
  }

  return <div>{addStar(children)}</div>;
}

export default Rating;
