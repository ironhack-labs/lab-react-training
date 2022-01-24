import React from 'react';
import './NumbersTable.css';

const NumbersTable = ({ limit }) => {
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div className="NumbersTable">
      {numbers.map((number) => {
        if (number % 2 !== 0) {
          return (
            <div key={number} className="ctn-number" style={{ backgroundColor: 'white' }}>
              {number}
            </div>
          );
        } else {
          return (
            <div key={number} className="ctn-number" style={{ backgroundColor: 'red' }}>
              {number}
            </div>
          );
        }
      })}
    </div>
  );
};

export default NumbersTable;
