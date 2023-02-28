import React from 'react'

function BoxColor(props) {

    const {r, g, b} = props;

  return (
    <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, height: 120, width: 500 }}>

        <p>rgb({r},{g},{b})</p>
        
    </div>
  )
}

export default BoxColor