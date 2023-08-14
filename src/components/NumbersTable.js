import React from 'react';

const NumbersTable = ({ limit }) => {
  const numbers = [];

  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div className="numbers-table">
      {numbers.map((number) => (
        <div
          key={number}
          className={`number-box ${number % 2 === 0 ? 'red' : ''}`}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;

