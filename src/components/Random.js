import React from 'react';

export default function Random({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return (
    <div className='m-3 border border-dark d-flex flex-row mb-3 align-items-center pt-3 ps-3 b'>
    <p>
      Random value between {min} and {max} =&gt; {randomNumber}{' '}
    </p>
    </div>
  );
}
