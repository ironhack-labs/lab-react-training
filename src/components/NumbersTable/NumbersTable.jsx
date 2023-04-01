/*JSX DE LA INTERACCIÓN 12*/

import './NumbersTable.css';
import React from 'react';

function NumbersTable({ limit }) {
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  const tableRows = numbers.map((num, i) => (
    <div
      className="Item"
      key={i}
      style={{ backgroundColor: num % 2 === 0 ? 'red' : 'white' }}
    >
      {num}
    </div>
  ));

  return <div className="NumbersTable">{tableRows}</div>;
}

export default NumbersTable;