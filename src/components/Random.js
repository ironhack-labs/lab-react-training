import React from 'react'
import "./Random.css"

function Random({min, max}) {
   const random = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="random">
      <p>{random}</p>
    </div>
  );
}

export default Random