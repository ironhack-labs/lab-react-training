import React from 'react';

export default function NumbersTable(props) {
  const numbers = [];
  for (let i = 1; i <= props.limit; i++) {
    numbers.push(i);
  }
  const createTiles = numbers.map((tile) => {
    if (tile % 2 === 0) {
      return (
        <div
          style={{
            width: 'calc(100% /5)',
            backgroundColor: 'red',
            padding: '20px',
            border: '1px solid black',
          }}
        >
          {tile}
        </div>
      );
    } else {
      return (
        <div
          style={{
            width: 'calc(100% /5)',
            backgroundColor: 'white',
            padding: '20px',
            border: '1px',
          }}
        >
          {tile}
        </div>
      );
    }
  });

  return (
    <div>
      <div>{createTiles}</div>
    </div>
  );
}
