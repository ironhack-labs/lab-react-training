import React from 'react';

const NumbersTable = ({ limit }) => {
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div className="numbers-table">
      {numbers.map((number) => (
        <div
          key={number}
          className={`number ${number % 2 === 0 ? 'red' : ''}`}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
