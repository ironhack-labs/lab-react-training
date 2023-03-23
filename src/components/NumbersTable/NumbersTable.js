import React from 'react'

function NumbersTable({ limit }) {

  const newArr = new Array(limit).fill()

  const bgColor = (num) => {
    if (num % 2 === 0) {
      return 'red'
    }
    return 'white'
  }

  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {newArr.map((el, i) => (<div key={i} style={{ backgroundColor: bgColor(i + 1) }} className='w-25 border m-2'>{i + 1}</div>))}
    </div>
  )
}

export default NumbersTable