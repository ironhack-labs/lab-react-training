import React from 'react'

function BoxColor(props) {
    const {r, g, b} =props
    let divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`
      };

  return (
    
    <div style={divStyle}>
        <h1>rgb({r},{g},{b})</h1>
    </div>
  )
}
export default BoxColor