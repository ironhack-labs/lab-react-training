import React from "react";
import '../Greetings/Greetings.css';

const BoxColor = ({r,g,b}) => {
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
      };
     
     
      function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      }

      const result = rgbToHex(r, g, b);
      

  return ( 
    <div className="allGreetings" style={divStyle}>{`rgb(${r}, ${g}, ${b})`}
    <p>{result}</p>
    </div>
  );
};

export default BoxColor;