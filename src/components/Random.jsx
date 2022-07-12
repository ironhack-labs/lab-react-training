import React from 'react';

const Random = ({ min, max }) => {
  return (
    <article className='idCard'>
      <h3>
        Random value between {min} and {max} is {' '}
        {Math.floor(Math.random() * (max - min) + min)}
      </h3>
    </article>
  );
};

export default Random;
