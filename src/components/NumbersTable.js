// components/NumbersTable.js

import React from 'react';

const NumbersTable = (props) => {
  const { limit } = props;
  const boxes = [...Array(limit)];
  return (
    <div className='numbers-table'>
      {boxes.map((box, index) => {
        const divStyle = { backgroundColor: index % 2 ? 'red' : 'white' };
        return <div className='box' style={divStyle} key={index}>{index + 1}</div>
      })}
    </div>
  );
}

export default NumbersTable;
