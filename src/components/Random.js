import React from 'react';

export const Random = ({ min, max }) => {
  const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  return (
    <div>
      <span>
        {'Random value between'}
        {min}
        {' and '}
        {max} {'=>'}{' '}
      </span>{' '}
      {random}
    </div>
  );
};
