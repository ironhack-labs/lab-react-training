import React from 'react';

const NumbersTable = (props) => {
  const getNumbers = ({ limit }) => {
    let numbers = [];
    for (let i = 1; i <= limit; i++) {
      numbers.push(
        <p key={i} className="number">
          {i}
        </p>
      );
    }
    return numbers;
  };
  return <div className="numbers-table">{getNumbers(props)}</div>;
};

export default NumbersTable;
