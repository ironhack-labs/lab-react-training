import React from 'react'

function BoxColor(props) {
   /*  const color = props.hex
    ? props.hex
    : `rgb(${props.r},${props.g},${props.b})` */
    const {r, g, b} = props
    
  return (
    <div className="color" style={{backgroundColor: `rgb(${r},${g},${b})`} } >
   
   <p>rbg({r}{g}{b}) </p>
    
    </div>
  )
}

export default BoxColor