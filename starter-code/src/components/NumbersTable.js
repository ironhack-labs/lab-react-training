import React from 'react';

import './NumbersTable.css';

const NumbersTable = (props) => {

  let limitList = [];
  for (let i = 1; i <= props.limit; i++) {
    limitList.push(i)
  }

  return (
    <ul className="numbers-table">
      {limitList.map(item => { 
        return item % 2 === 0 ? <li key={item} className="numbers-table-red">{item}</li> : <li key={item} className="numbers-table-white">{item}</li>
      })}
    </ul>
  );
}

export default NumbersTable;