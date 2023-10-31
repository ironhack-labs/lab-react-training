import React from 'react';

function NumbersTable({ limit }) {
  const numbers = [];
  
  for (let i = 1; i <= limit; i++) {
    const isEven = i % 2 === 0;
    const numberStyle = isEven ? { color: 'red' } : {};
    numbers.push(
      <li key={i} style={numberStyle}>
        {i}
      </li>
    );
  }

  return (
    <div className="numbers-table">
      <ul>{numbers}</ul>
    </div>
  );
}

export default NumbersTable;