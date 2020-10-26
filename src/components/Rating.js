import React from 'react';

export default function Rating(props) {
  const fullStar = '★';
  const emptyStar = '☆';
  if (props.children >= 0 && props.children < 0.49) {
    return <div>'☆☆☆☆☆'</div>;
  }
  // else if (props.children > 1.5 && props.children <)

  return <div>{props.children}</div>;
}
