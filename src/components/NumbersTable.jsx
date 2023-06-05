import React from 'react';

function NumbersTable({ limit }) {
  const numbersList = [];

  for (let i = 1; i <= limit; i++) {
    numbersList.push(i);
  }
  return (
    <div className="numbers-table">
      {numbersList.map((number) => (
        <div className="number"> {number}</div>
      ))}
    </div>
  );
}

export default NumbersTable;
