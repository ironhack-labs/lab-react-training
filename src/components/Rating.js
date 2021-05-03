import React from 'react';

export default function Rating(props) {
  const rating = (num) => {
    let rating = '';
    for (let idx = 0; idx < 5; idx++) {
      rating += Math.round(num) > idx ? '★' : '☆';
    }
    return rating;
  };

  return <div>{rating(props.children)}</div>;
}
