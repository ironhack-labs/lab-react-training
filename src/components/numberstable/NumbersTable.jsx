import React from 'react';

function Numberstable (props) {
  const numbers = [];

  for (let i = 1; i <= props.limit; i++) {
    numbers.push(i)
  };

  return (
    <div style={{ display: 'flex', margin: '1rem' }}>
      {numbers.map((num) => {
        return num % 2 === 0 ? (
          <div
          style={{
              width: '50px',
              height: '50px',
              border: '1px solid black',
              backgroundColor: 'red',
              textAlign: 'center'
            }}
          >
            <p>{num}</p>
          </div>
        ) : (
          <div
            style={{
              width: '50px',
              height: '50px',
              border: '1px solid black',
              textAlign: 'center'
            }}
          >
            <p>{num}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Numberstable;