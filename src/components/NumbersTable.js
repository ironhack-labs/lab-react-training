import React from 'react';

export const NumbersTable = ({ limit }) => {
  const arr = [];
  const table = (number) => {
    for (let i = 1; i <= number; i++) {
      arr.push(i);
    }
    return arr;
  };

  table(limit);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {arr.map((val, index) => {
        return val % 2 === 0 ? (
          <div
            key={index}
            style={{
              border: '2px solid black',
              backgroundColor: 'red',
              width: '200px',
              height: '200px',
              fontSize: '20px',
            }}
          >
            {val}
          </div>
        ) : (
          <div
            key={index}
            style={{
              border: '2px solid black',
              width: '200px',
              height: '200px',
              fontSize: '20px',
            }}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
};
