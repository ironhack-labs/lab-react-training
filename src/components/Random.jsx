import React from 'react'

function Random(props) {
    const { min, max} = props;
  return (
    <div>Random number between {min} and {max} =&gt; {Math.floor(Math.random() * (max - min) + min )}</div>
  )
}

export default Random;