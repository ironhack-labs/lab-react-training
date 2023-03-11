import React from 'react'

export default function Random({ min, max }) {
  function randomNum(min, max) {
    return min + Math.floor(Math.random() * max)
  }

  return (
    <div className='border border-black mt-2'>
      <p>Random value between {min} and {max} {'=>'} {randomNum(min, max)} </p>
    </div>
  )
}
