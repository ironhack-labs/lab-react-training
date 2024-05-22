import React from 'react';
import './NumbersTable.css';

const NumbersTable = ({ limit }) => {
  const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div className="numbersTable">
      {numbers.map((number) => (
        <div key={number} className={`number ${number % 2 === 0 ? 'even' : ''}`}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
