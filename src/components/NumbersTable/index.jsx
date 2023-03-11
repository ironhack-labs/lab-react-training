import React from 'react';
import './index.css'

const NumbersTable = ({ limit }) => {
  let nums = []
  for(let i = 1; i <= limit; i++) {
    nums.push(i)
  }
  const isEven = (num) => {
    if(!(num % 2)) {
      return true
    } else {
      return false
    }
  }
  return (
    <div className='NumbersTable'>
      {nums.map(num => {
        return <div style={isEven(num) ? {backgroundColor: 'red'} : null} key={num}>
          <p key={num}>{num}</p>
        </div>
      })}
    </div>
  );
};

export default NumbersTable;