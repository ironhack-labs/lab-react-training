import React from 'react';
import '../index.css';

function NumbersTable(props) {
  const numbers = [];
  for (let i = 1; i <= props.limit; i++) {
    numbers.push(i);
  }

  return (
    <div className="numbersTable">
      {numbers.map((number) => (
        <div
          key={number}
          className={number % 2 === 0 ? 'numberItem red' : 'numberItem'}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;

