import React from 'react'

function Random(props) {
  let { min, max } = props;
  let value = Math.floor(Math.random() * (max - min) + min);
  return (
    <div>
      <p>Random number between {min} and {max} equals to {value}</p>
    </div>
  )
}

export default Random