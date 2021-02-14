import React from 'react';
import './NumbersTable.css';

export function NumbersTable({ limit }) {
  var numbersOfSquares = [];

  for (var i = 0; i < limit; i++) {
    if (i % 2 === 0) {
      numbersOfSquares.push(
        <div className="odd-square" key={i}>
          <p className="square-number">{i}</p>
        </div>
      );
    } else {
      numbersOfSquares.push(
        <div className="square" key={i}>
          <p className="square-number">{i}</p>
        </div>
      );
    }
  }

  return <div className="container-squares">{numbersOfSquares}</div>;
}
