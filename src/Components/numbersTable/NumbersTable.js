import React from 'react';
import './NumbersTable.css';

export default function NumbersTable(props) {
  const tableArr = [];
  for (let i = 1; i < props.limit + 1; i++) {
    tableArr.push(i);
  }

  const boxes = tableArr.map((el, index) => {
    return el % 2 === 0 ? (
      <div className="boxes" key={index} style={{ backgroundColor: 'red' }}>
        <h1>{el}</h1>
      </div>
    ) : (
      <div className="boxes" key={index}>
        <h1>{el}</h1>
      </div>
    );
  });

  return <div className="boxesContainer">{boxes}</div>;
}
