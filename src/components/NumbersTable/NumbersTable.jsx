import React from 'react'
import './NumbersTable.css'
function NumbersTable({ limit }) {

  const numbers = [...new Array(limit).keys()];


  return (
    <div className='d-flex flex-wrap mb-5'>
      {numbers.map((number) => (
        <div key={number} className={`numbers-table ${number % 2 === 1 ? "even" : "odd"}`}>{number + 1}</div>
      ))}
    </div>
  )
}

export default NumbersTable