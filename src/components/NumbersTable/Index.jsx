import './Index.css'
import React from 'react';

const NumbersTable = ({ limit }) => {
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  const isEven = (number)=> {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="NumbersTable">
      {numbers.map((number) => {
        return (
          <div
            className="even"
            key={number}
            style={
              isEven(number) ? { backgroundColor: 'red' } : { backgroundColor: 'white' }
            }
          >
            <p>{number}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NumbersTable;
