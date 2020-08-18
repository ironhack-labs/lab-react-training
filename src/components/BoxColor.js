import React from 'react';

function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length === 1)
      r = "0" + r;
    if (g.length === 1)
      g = "0" + g;
    if (b.length === 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

const BoxColor = (props) => {
    let boxStyle = {
        backgroundColor: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
        height: '70px',
        justifyContent: 'center',
        textAlign: 'center'
    }

    let hex = RGBToHex(props.r, props.g, props.b)
    return (
        <div className="box" style={boxStyle}>
            rgb({props.r}, {props.g}, {props.b}) 
            <br />
            {hex}
        </div>
    )
}

export default BoxColor