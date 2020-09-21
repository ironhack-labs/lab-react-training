import React from 'react'
import './NumbersTable.css'

const NumbersTable = ({ limit }) => {
  const elements = new Array(limit).fill().map((_, i) => (
    <li key={i}>{i + 1}</li>
  ))
  return (
    <ul className="NumbersTable">
      {elements}
    </ul>
  );
};
export default NumbersTable;