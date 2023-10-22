import React from 'react';

function NumbersTable(props) {
  const { limit } = props;

  const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div className="numbers-board">
      {numbers.map((number) => (
        <div
          key={number}
          className="number-box"
          style={{ backgroundColor: number % 2 === 0 ? 'red' : 'transparent' }}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;