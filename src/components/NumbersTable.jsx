import React from 'react'

function NumbersTable({ limit }) {

  const numbers = [...Array(limit).keys()]

  return (
    <div className='d-flex flex-wrap m-3'>
      {numbers.map(number => <Square numbers={number + 1} />)}
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
      <div class="border border-1 border-dark" style={divStyle} >
        <div class="card-body">
          <p class="card-text text-center d-flex justify-content-center mt-4">{numbers}</p>
        </div>
      </div>
    </div>
  )
}



