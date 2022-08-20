import React from 'react'

function BoxColor(props) {
    const { r, g, b } = props;
  
    const color = { backgroundColor: `rgb(${r},${g},${b})` };
  
    return (
      <div  style={color}>
        rgb({r},{g},{b})
      </div>
    );
  }
  
  export default BoxColor;