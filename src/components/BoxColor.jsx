import React from 'react'

function BoxColor(props) {
    const {r,g,b} = props;
    const boxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '200px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    }
  return (
    <div style={boxStyle}>
        
        <p>BoxColor  {r} , {g} , {b}</p>
    
    </div>
  )
}

export default BoxColor