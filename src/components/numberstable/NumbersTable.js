import React from 'react';
import "./NumbersTable.css"

const NumbersTable = ({ limit }) => {
  let numbers = [];
  for (let index = 1; index <= limit; index++) {
    numbers.push(index);
  }
  return (
    <div className="numbers-container">
      {numbers.map((number) => {
        let backgroundColor = number % 2 === 0 ? 'red' : 'white';
        return(
            <div className="number-box" key={number} style={{ backgroundColor }}>
                {number}
            </div>
        );
      })}
    </div>
  );
};

export default NumbersTable;
