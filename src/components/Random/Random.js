import React from 'react'

function Random({min, max}) {

  const result = Math.floor(Math.random() * max) + min;

  return (
    <div className='mt-2'>Random value between {min} and {max}: {result} </div>
  )
}

Random.defaultProps = {
  min: '0',
  max: '100'
}

export default Random