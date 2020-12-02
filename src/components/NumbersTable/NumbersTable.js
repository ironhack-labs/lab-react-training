import React from 'react';
import './NumbersTable.css';

const NumbersTable = (props) => {
  const { limit } = props;
  const cubes = Array.from({length: limit}, (_, i) => i + 1);
  
  return (
    <div className='cubes'>
      {cubes.map((e, i) => 
        e % 2 === 0
          ? <div className='cube red-cube' key={i}>{e}</div> 
          : <div className='cube' key={i}>{e}</div> 
        )
      }
    </div>
  )
}

export default NumbersTable;