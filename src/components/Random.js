import React from 'react';

function Random({ min, max }) {
  function Number(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div className="Card">
      <p>
        Random value between {min} and {max} => {Number(min, max)}{' '}
      </p>
    </div>
  );
}

export default Random;
