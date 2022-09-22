import React from 'react'

const BoxColor = (props) => {
    const {r, g, b} =props;
    const color = {background: `rgb(${r},${g},${b})`}
   
  return (
   <div className='color' style={color}>
        <h3>rgb({r},{g},{b})</h3>

    </div> 
  )
}

export default BoxColor;