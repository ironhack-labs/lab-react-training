import React from 'react';

export default function BoxColor(props) {

    function RGBToHex(r,g,b) {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
      
        if (r.length == 1)
          r = "0" + r;
        if (g.length == 1)
          g = "0" + g;
        if (b.length == 1)
          b = "0" + b;
      
        return "#" + r + g + b;
      }

    const divStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        width: '98.5vw',
        height: '100%',
        border: '2px solid #000',
        margin: '0px 0px 15px 5px'
    };

    return (
        <div style={divStyle}>
            <h4>rgb({props.r},{props.g},{props.b});</h4>
            <h4>{RGBToHex(props.r,props.g,props.b)}</h4>
        </div>
    )
}