import React from 'react';

const Rating = props => {
  const number = Math.round(Number(props.children));
  return '★'.repeat(number) + '☆'.repeat(5 - number);
};

export default Rating;
