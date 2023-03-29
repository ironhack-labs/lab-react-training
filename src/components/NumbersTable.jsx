import React from 'react'

function NumbersTable({ limit }) {

  const numbers = [...new Array(limit).keys()];

  return (
    <div className='d-flex flex-wrap mb-5'>
      {numbers.map((number) => (
        <div key={number} className='numbers-table' style={{backgroundColor: number % 2 ? "white" : "red"}}>{number + 1}</div>
      ))}
    </div>
  )
}

export default NumbersTable