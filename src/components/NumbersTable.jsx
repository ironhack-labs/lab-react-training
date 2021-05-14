import React from 'react';

function NumbersTable(props) {
  const numbers = [];
  for (let i = 1; i <= props.limit; i++) numbers.push(i);

  return (
    <div style={{ display: 'flex', margin: '5rem' }}>
      {numbers.map((el) => {
        return el % 2 === 0 ? (
          <div
            style={{
              width: '150px',
              height: '50px',
              border: '1px solid black',
              backgroundColor: 'red',
            }}
          >
            <p>{el}</p>
          </div>
        ) : (
          <div
            style={{
              width: '150px',
              height: '50px',
              border: '1px solid black',
            }}
          >
            <p>{el}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
