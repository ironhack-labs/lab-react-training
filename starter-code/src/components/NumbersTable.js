import React from "react";

const createColumn = number => {
  const even = number % 2 === 0;
  let bgColor = {};
  if (even) bgColor = {backgroundColor:"white"};
  else bgColor = {backgroundColor:"red"};
  return <li key={number} style={bgColor}>{number}</li>;
};

const createColumns = (cols)=>{
  let array = [];
  for (let index = 1; index <= cols; index++) {
    array.push(createColumn(index))
  }
  return array;
}

const NumbersTable = ({ limit }) => (
  <ul className="numbers-table">
    {createColumns(limit)}
  </ul>
);

export default NumbersTable;
