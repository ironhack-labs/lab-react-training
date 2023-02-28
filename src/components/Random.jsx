import React from 'react'

function Random(props) {
    const {min, max} = props;
  return (
    <div>
        <p>Random number between {min} and {max} =&gt; {Math.floor(Math.random() * (max - min) + min)}</p>
    </div>
  )
}

export default Random