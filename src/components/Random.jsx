import React from 'react'

// eslint-disable-next-line react/prop-types
export default function Random({min, max}) {
   
  const randNum = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div className="text-box">
        <p>Random value between {min} and {max} =&gt; {randNum}</p>
    </div>
  )
}
