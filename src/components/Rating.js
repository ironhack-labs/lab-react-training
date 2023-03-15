import React from 'react'

function Rating({ children }) {

  const round = () => {
    return Math.round(children)
  }

  const setStars = () => {
    return Array(5)
      .fill("☆")
      .map((star, index) => index < round() ? "★" : star)
  }

  return (
    <h1 className='row mx-3 my-0 d-flex flex-row justify-content-start'>{setStars()}</h1>
  )
}

export default Rating