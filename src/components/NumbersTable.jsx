import React from 'react'

function NumbersTable({ limit }) {

  const numbers = [...Array(limit).keys()]

  return (
    <div className='d-flex flex-wrap m-3'>
      {numbers.map(number => <Square numbers={number + 1} key={number} />)}
    </div>
  )
}

export default NumbersTable



function Square({ numbers }) {

  const color = numbers % 2 ? "white" : "red"

  const divStyle = {
    width: 120,
    background: color,
    height: 80
  }

  return (
    <div>
      <div className="border border-1 border-dark" style={divStyle} >
        <div className="card-body">
          <p className="card-text text-center d-flex justify-content-center mt-4">{numbers}</p>
        </div>
      </div>
    </div>
  )
}



