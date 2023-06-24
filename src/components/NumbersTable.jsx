import React from 'react';

function NumbersTable({ limit }) {
  const numbers = [];

  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {numbers.map((num) => {
        return (
          <div
            style={{
              border: 'solid black 1px',
              backgroundColor: num % 2 === 0 ? 'red' : 'white',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {num}
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
