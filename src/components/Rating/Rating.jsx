/*JSX DE LA INTERACCIÓN 6*/
import './Rating.css';
import React from 'react';

const Rating = ({ children }) => {
  const getNum = (float) => {
    return Math.round(float)
  }
  return (
    <div className='Rating'>
      <p>{'★'.repeat(getNum(children)) + '☆'.repeat(5 - getNum(children))}</p>
    </div>
  );
};

export default Rating;