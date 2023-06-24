import React from 'react'

function BoxColor({r,g,b}) {
    const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  return (
    <div className='boxColor' style={{ backgroundColor }}>rgb({r},{g},{b})</div>
  )
}

export default BoxColor