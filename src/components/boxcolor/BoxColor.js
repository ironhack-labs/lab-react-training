import React from 'react';

const BoxColor = props => {
        let r = props.r
        let g = props.g
        let b = props.b
        let coloredBox = {
            backgroundColor: `rgb(${r},${g},${b})`,
            width: "50%",
            height:"50px",
            margin:"auto"
    
        }
    
      return (
      <div style={coloredBox}>{coloredBox.backgroundColor}
    
      </div>);
    
    };

export default BoxColor;