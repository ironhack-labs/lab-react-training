import React from 'react'

function Random({ min, max}) {

  let random = Math.floor(Math.random() * ((max + 1) - min) + min);

  return (
    <div className='border p-2 m-2 d-flex'>
      <p>Random value between {min} and {max} = {random}</p>
    </div>
  )
}

export default Random