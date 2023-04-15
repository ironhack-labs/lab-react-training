import React from 'react';

const NumbersTable = ({ limit }) => {
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div className="numbers-table">
      {numbers.map((number) => (
        <div
          key={number}
          className="number-cell"
          style={{ backgroundColor: number % 2 === 0 ? 'red' : 'white' }}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
