import { useState } from "react";
import './NumberTable.css';

function NumberTable({ limit }) {

  const array = []

  for (let i = 0; i < limit; i++) {
    array.push(i + 1);
  }

  const numtable = () => {
    return array.map((number, index) => {
      return number % 2 === 0 ? <p className="even" key={index}>{number}</p> : <p className="odd" key={index}>{number}</p>
    })
  }

  return (
    <div className="numbertable-container">
      {numtable()}
    </div>
  );
}

export default NumberTable;