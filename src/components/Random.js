
import React from 'react'

function Random({min, max}) {
    let number = Math.floor(Math.random() * (max - min) + min);
  return (
    <div>
<p>Random value between {number}</p>
    </div>
  )
}

export default Random