import React from 'react'

function BoxColor(props) {

const {r, g, b} = props

  return (
    <div 
    style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '1000px',
        height: '100px',
    }}>
<p> rgb({r}, {g}, {b})</p>

    </div>
  )
}

export default BoxColor