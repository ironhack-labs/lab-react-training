import React from 'react'

function BoxColor(props) {
    const {r, g, b} = props;

 /*    let randColor = () => {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    }
 */
  return (
    <div style = {{ height:100, backgroundColor:`rgb( ${r}, ${g}, ${b})`}}>
        
    </div>
  )
}

export default BoxColor