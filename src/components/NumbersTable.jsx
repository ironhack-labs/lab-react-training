import React from 'react';

function NumbersTable(props) {
  let numList = [];
  for (let i = 1; i < props.limit + 1; i++) {
    numList.push(i);
  }

  return (
    <ul id="numbersTable">
      {numList.map(function (num) {
        return <li>{num}</li>;
      })}
    </ul>
  );
}

export default NumbersTable;
