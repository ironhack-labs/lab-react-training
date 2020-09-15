import React, { useState } from 'react';

function NumbersTable({ limit }) {
  const [grid, setGrid] = useState([]);
  let gridArr = [];
  const renderMe = () => {
    for (let i = 1; i <= limit; i++) {
      let color = i % 2 === 0 ? 'red' : 'white';
      gridArr.push(
        <div
          key={i}
          style={{
            border: '3px solid black',
            width: '50px',
            height: '50px',
            backgroundColor: color,
          }}
        >
          {i}
        </div>
      );
    }
    setGrid([...grid, gridArr]);
  };
  window.onload = () => {
    renderMe();
  };

  return <div style={{ display: 'flex' }}>{grid}</div>;
}

export default NumbersTable;
