import React from 'react'

function Random(props) {
    const {min, max} = props
  return (<div>
    <p>The random number between {min} and {max} is:{Math.floor(Math.random() * (max - min + 1) + min)}</p>
  </div>
  )
}

export default Random