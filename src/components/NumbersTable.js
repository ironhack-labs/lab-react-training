import React from 'react'

function NumbersTable({ limit }) {
  const squares = [...new Array(limit)]

  const bgColor = (num) => {
    if (num % 2 === 0) {
      return "red"
    }
    return "white"
  }
console.log('object');

return (
  <div className='flex m-auto w-100 flex-wrap' >
    {squares.map((element, i) => (
      <div key={i} className='border border-solid border-black h-20 w-20 flex justify-center items-center' style={{ backgroundColor: bgColor(i + 1) }} >{i + 1}</div>
    ))}
  </div>
)
}

export default NumbersTable