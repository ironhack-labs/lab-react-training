import React from 'react'

function BoxColor({r, g, b}) {
    const containerColor = {backgroundColor: `rgb(${r},${g},${b})`}

  return (
    <div className='boxcolor-container' style={containerColor}>
        <p>rgb({r},{g},{b})</p>

    </div>
  )
}

export default BoxColor