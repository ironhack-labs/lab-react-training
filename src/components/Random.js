import React from 'react'

function Random({ min, max }) {
  const getRandom = (min, max) => {
    return Math.round(Math.random() * (max - min + 1) + min)
  }
  return (
    <div className='row text-start m-3 border border-dark rounded p-2'>
      <div className='col'>
        Random value between {min} and {max} ={'>'} {getRandom(min, max)}
      </div>
    </div>
  )
}

export default Random