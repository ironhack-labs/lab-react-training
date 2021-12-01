import React from 'react';

export default function NumbersTable(props) {
  const numbers = [...Array(props.limit).keys()];

  return (
    <div className="rectContainer">
      {numbers.map((n) => {
        return (
          <div
            key={n}
            style={{ backgroundColor: n % 2 === 0 ? 'white' : 'red' }}
            className="rect"
          >
            <p>{n + 1}</p>
          </div>
        );
      })}
    </div>
  );
}
