import React from 'react';
import '../App.css';

function NumbersTable(props) {
  const { limit } = props;

  let arrOfNumbers = [];
  for (let i = 1; i <= limit; i++) {
    arrOfNumbers.push(i);
  }

  return (
    <div style={{ display: 'flex', flexFlow: 'row-wrap' }}>
      {arrOfNumbers.map((number) => {
        return (
          <div
            style={{
              border: '1px solid black',
              height: 50,
              width: 50,
              fontSize: 20,
              backgroundColor: number % 2 === 0 ? 'red' : 'white',
            }}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
