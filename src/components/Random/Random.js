import React from 'react'
import './Random.css';

function Random({ min, max }) {
  const randomValue = Math.floor((Math.random() * (max - min) + min));
  return (
    <div className="Random">
      Random value between {min} and {max} =&gt;{randomValue}
    </div>
  )
}

export default Random