import React from 'react'

function BoxColor({ r, g, b }) {

  const divStyle =  { 
    backgroundColor: `rgb(${r},${g},${b})`, 
    width: 700,
    height: 100
  };

  return (
    <div style={divStyle} className="border m-2 d-flex justify-content-center align-items-center border border-dark">
      <p>rgb - {r},{g},{b}</p>
    </div>
  )
}

export default BoxColor