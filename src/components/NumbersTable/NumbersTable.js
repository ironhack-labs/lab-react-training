import React from 'react';

function NumbersTable(props) {
  const arrayNumber = [];
  const color = ['red', 'white'];

  for (let i = 1; i <= props.limit; i++) {
    arrayNumber.push(
      <div key= {i} style={{ backgroundColor: `${color[i % 2]}`, padding: "10px"}}>{i}</div>
    );
  }

  return <div style={{ display: "flex"}}> {arrayNumber}</div> ;
}

export default NumbersTable;