import React from 'react';

export default function NumberTable({ limit }) {
  const array = [];

  for (let i = 1; i <= limit; i++) {
    const className = i % 2 === 0 ? 'even' : 'odd';

    array.push(
      //the span here allows us to display the numbers on the same line
      <span className={`table ${className}`}>{i}</span>
    );
  }
  return <div className="numberTable">{array}</div>;
}
