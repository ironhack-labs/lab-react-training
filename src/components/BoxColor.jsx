import React from 'react'

function Boxcolor(props) {
    const {r,g,b} = props;


  return (
    <div style={{ backgroundColor: `rgb(${r},${g},${b})` }} className="BoxColor">
    rgb ({r},{g},{b})
  </div>
  )
}

export default Boxcolor