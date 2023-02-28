import React from 'react'

function Random(props) {
    const { min, max } = props;

  return (
    <div>
    <h3>{Math.floor(Math.random() * (max - min) + min)}</h3>
    </div>
  )
}

export default Random