import React from 'react';
import './NumbersTable.css';

function NumbersTable({ limit }) {
  console.log(limit);
  const arrNumbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div className="numberstable">
      {arrNumbers.map((elem, index) => {
        if (elem % 2 === 0) {
          return <div style={{background:"red"}} key={index}>{elem}</div>;
        } else {
          return <div key={index}>{elem}</div>;
        }
      })}
    </div>
  );
}

export default NumbersTable;
