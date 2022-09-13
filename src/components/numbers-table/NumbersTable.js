import React from 'react'
import "./NumbersTable.css"

function NumbersTable({ limit }) {
  const array = []
  
  for (let i = 1; i <= limit; i ++) {
    array.push(i)
  }

  return (
    <div className='container d-flex flex-wrap gap-2 my-5'>
    {array.map(square => (
      <span key={square} className={`square border ${square % 2 === 0 ? "bg-danger" : ""} d-flex justify-content-center align-items-center`}>{square}</span>
    ))}
      
    </div>
  )
}

export default NumbersTable