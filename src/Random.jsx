import React from 'react';
import './Random.css';

function Random(props) {
  const { min, max } = props;
  return (
    <div className="Random">
      <p>
        Random value between {min} and {max} =&gt;{' '}
        {Math.floor(Math.random() * (max - min)) + min}{' '}
      </p>
    </div>
  );
}

export default Random;
