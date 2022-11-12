import React from 'react';

 
function BoxColor(props) {
    const { r, g, b } = props

    const divStyle = {
        color: 'white',
        backgroundColor: `rgb(${r},${g},${b})`
      };


  return (
    <div className="BoxColor">
       <div style={divStyle}>{ `rgb(${r},${g},${b})` }</div>
    </div>
  );
}
 
export default BoxColor