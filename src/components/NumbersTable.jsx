import React from 'react';

function NumbersTable(props) {
  const numbers = Array.from(Array(props.limit).keys());

  return (
    <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
      {numbers.map((num) => (
        <div
          style={{
            height: '50px',
            width: '50px',
            border: '2px solid black',
            backgroundColor: (num + 1) % 2 === 0 ? 'red' : 'white',
          }}
          key={num + 1}
        >
          {num + 1}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
