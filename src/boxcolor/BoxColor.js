import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
    let color = 'white'
    if((props.r + props.g + props.b)/3 > 100)
        color = 'black'
  let styles = {
    'background-color': `rgb(${props.r},${props.g},${props.b})`,
    'color': color

  };

  function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
  }
  
  function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
  }

  return (
    <div className="BoxColor" style={styles}>
     <p>
          {styles['background-color']}
         </p>
         <p>
             {ConvertRGBtoHex(props.r, props.g, props.b)}
         </p>
    </div>
  );
};

export default BoxColor;
