import React from 'react';

const NumbersTable = ({ limit }) => {
  function* range(a, b) {
    while (a <= b) {
      yield a;
      a++;
    }
  }
  const numberList = Array.from(range(1, limit));
  return (
    <div className="numberList">
      {numberList.map((number) => {
        if (number % 2 === 0) {
          return (
            <div
              key={number}
              style={{
                backgroundColor: 'red',
                width: '200px',
                height: '200px',
                fontSize: '5rem',
                border: '4px solid',
              }}
            >
              {number}
            </div>
          );
        } else {
          return (
            <div
              key={number}
              style={{
                width: '200px',
                height: '200px',
                fontSize: '5rem',
                border: '4px solid',
              }}
            >
              {number}
            </div>
          );
        }
      })}
    </div>
  );
};

export default NumbersTable;
