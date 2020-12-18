import React from 'react';
import './NumbersTable.css';

const NumbersTable = (props) => {
  const { limit } = props;
  const square = Array.from({length: limit}, (_, i) => i + 1);

  return (
    
    <div className="box">
    
      <div className='squares'>
        {square.map((e, i) => 
          e % 2 === 0
            ? <div className='square red' key={i}>{e}</div> 
            : <div className='square' key={i}>{e}</div> 
          )
        }
      </div>

    </div>
  )
}

export default NumbersTable; 