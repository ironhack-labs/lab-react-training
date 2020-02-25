import React from "react";

const NumbersTable = (props) => {
  let limit = props.limit;
  let items = [];
  for (let num = 1; num < limit + 1;  num++) {
    items.push(
      <li key={num} style={{backgroundColor: (num % 2 === 0) ? "red": "white"}}>{num}</li>
    );
  }
  return (
    <ul className="NumbersTable">
      {items}
    </ul>
  );
};

export default NumbersTable;