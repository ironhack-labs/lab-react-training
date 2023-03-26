import React from 'react'

function NumbersTable( {limit} ) {
    const numbers = [...new Array(limit)]

    const color = (num) => {
        if (num % 2 === 0) { return 'red'}
        else { return 'white'}
    }

  return (
    <div className='stripes'>
    {numbers.map((num, n) => (
        <div key={n} className='grid' style={{ backgroundColor: color(n + 1) }} > {n +1}</div>
    ))}
    </div>
  )
}

export default NumbersTable