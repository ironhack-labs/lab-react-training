import React from 'react';
import './index.css'

const Random = ({ min, max }) => {
  const getRandomNum = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
  }
  return (
    <div className='Random'>
      <p>Random value between {min} and {max} ={'>'} {getRandomNum(min, max)}</p>
    </div>
  );
};

export default Random;