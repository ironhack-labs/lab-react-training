import React from 'react';
import './NumbersTable.css';
const NumbersTable = ({ limit }) => {
  const items = [];

  for (let i = 1; i <= limit; i++) {
    const checkNum =
      i % 2 === 0
        ? items.push(
            <div className="par" key={i}>
              {' '}
              {i}{' '}
            </div>
          )
        : items.push(
            <div className="impar" key={i}>
              {' '}
              {i}{' '}
            </div>
          );
  }

  return <div className="numberContainer">{items}</div>;
};

export default NumbersTable;
