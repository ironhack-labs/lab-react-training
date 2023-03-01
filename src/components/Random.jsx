import React from 'react';

function Random({ min, max }) {
  const randomIntFromInterval = () => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="container-default">
      <p>
        {`Random value between ${min} and ${max} => ${randomIntFromInterval()}`}
      </p>
    </div>
  );
}

export default Random;
