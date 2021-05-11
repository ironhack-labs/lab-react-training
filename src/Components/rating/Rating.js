import React from 'react';

export default function Rating(props) {
  const stars = (props) => {
    let number = Math.round(Number(props.children));

    let result = '';
    for (let i = 1; i <= 5; i++) {
      if (i >= 1 && i <= number) {
        result += '★';
      } else result += '☆';
    }
    return result;
  };
  return <div className="rating">{stars(props)}</div>;
}
