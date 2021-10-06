import React from 'react';

function BoxColor (props) {
    const {r,g,b} = props
    const rgbToHex = (rgb) => { 
        let hex = Number(rgb).toString(16)
        if (hex.length < 2) {
             hex = "0" + hex
        }
        return hex
      }
      const fullColorHex = (r,g,b) => {   
        let red = rgbToHex(r);
        let green = rgbToHex(g);
        let blue = rgbToHex(b);
        return red+green+blue;
      };
    return (
        <div style={{backgroundColor:`rgb(${r},${g},${b})`, height: "50px"}}>
                rgb{r},{g},{b}
            #    {fullColorHex (r,g,b)}
        </div>
    )

};

export default BoxColor;