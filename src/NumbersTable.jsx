import React from 'react';
import './NumbersTable.css';

function NumbersTable(props) {
  const { limit } = props;
  let arr = [];
  for (let i = 1; i <= limit; i++) {
    arr.push(i);
  }
  return (
    <div className="NumbersTable">
      {arr.map((num) => {
        return <div className="NumbersTable-div">{arr[num - 1]}</div>;
      })}
    </div>
  );
}

export default NumbersTable;
