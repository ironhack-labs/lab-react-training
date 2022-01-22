import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
    let color = 'white'
    if((props.r + props.g + props.b)/3 > 100)
        color = 'black'
  let styles = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    color: color

  };

  function colorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
  }
  
  function convertRGBtoHex(red, green, blue) {
    return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
  }

  return (
    <div className="BoxColor" style={styles}>
     <p>
          {styles['background-color']}
         </p>
         <p>
             {convertRGBtoHex(props.r, props.g, props.b)}
         </p>
    </div>
  );
};

export default BoxColor;
