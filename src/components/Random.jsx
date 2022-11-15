import React from 'react'

function Random(props) {
    const {min, max} = props
  return (<div>
    <p>The random number between {min} and {max} is:{MathFloor(MathRandom())}</p>
  </div>
  )
}

export default Random