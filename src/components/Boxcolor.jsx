import React from 'react'

function Boxcolor(props) {
  const { r, g, b } = props;
  return (
    <div>
      <p style={{ backgroundColor: `rgb(${r},${g},${b})` }} >rgb({r},{g},{b})</p>
    </div>
  )
}

export default Boxcolor