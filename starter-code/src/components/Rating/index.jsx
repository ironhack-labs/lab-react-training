import React from 'react';
import './style.css';


const Rating = props => {
  const number = Math.round(Number(props.children));
  return <div className="ratings">{'★'.repeat(number) + '☆'.repeat(5 - number)}</div>;
};

export default Rating;