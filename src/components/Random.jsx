import React from 'react';

function Random(props) {
  const { min, max } = props;
  return (
    <div className="custom-card random-card">
      <p>
        <b>
          Random Number between {min} and {max} ={'> '}
          {Math.floor(Math.random() * (max - min + 1) + min)}
        </b>
      </p>
    </div>
  );
}

export default Random;
