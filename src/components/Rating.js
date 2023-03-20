import React from 'react'

function Rating({ children }) {
  const stars = ['☆', '☆', '☆', '☆', '☆']
  let fixNum = Math.round(children)
  return (
    <div className='rating'>
      {
        stars.map((star, i) => {
          return i < fixNum ? <h1 key={i}>★</h1> : <h1 key={i}>{star}</h1>
        })
      }
    </div>
  )
}

export default Rating