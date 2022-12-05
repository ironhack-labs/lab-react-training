import React from 'react'

const Rating = (props) => {
    const { children } = props

    const rd = Math.round(children)

  return (
    <div>
       <h1> {"★".repeat(rd)+"☆".repeat(5-rd)} </h1>
    </div>
  )
}

export default Rating