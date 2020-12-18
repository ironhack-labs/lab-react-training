import React from 'react';

const BoxColor = props => {

  const valColor = `rgb(${props.r},${props.g},${props.b})`;
  const colorHex = function (rgb) { 
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };

  if(valColor  === 'rgb(255,0,0)') {
    return (
      <div className="box" style={{ backgroundColor: valColor, color: "white" }}>
        <div className="box-color">
         
          <p>{valColor}</p>
          <p>#{colorHex(props.r)}{colorHex(props.g)}{colorHex(props.b)}</p>
        
        </div>
      </div>  
    ) 
  }


  return (
    <div className="box" style={{ backgroundColor: valColor }}>
      
      <div className="box-color">
        <p>{valColor}</p>
        <p>#{colorHex(props.r)}{colorHex(props.g)}{colorHex(props.b)}</p>
      </div>
    
    </div>  
  )
}

export default BoxColor;