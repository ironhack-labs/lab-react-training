import React from 'react'

function Random(props) {
    const {min, max} = props;
  return (
    <div>
        <h1>Random value between {min} and {max} {Math.floor(Math.random() * (max - min + 1) + min)}</h1>
    </div>
  )
}

export default Random