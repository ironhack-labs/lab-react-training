import React from 'react';

export default function NumbersTable(props) {
  let numberArr = [];
  for (let i = 1; i <= props.limit; i++) {
    numberArr.push(i);
  }

  let colors = ['Red', 'White'];

  return (
    <div className="numbersTable">
      {numberArr.map((item, index) => (
        <div key={index} style={{ backgroundColor: colors[item % 2] }}>
          {item}
        </div>
      ))}
    </div>
  );
}
