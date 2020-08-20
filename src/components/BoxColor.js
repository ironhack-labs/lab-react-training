import React from 'react'

function BoxColor(props) {
    const {r, g, b} = props;
    let styles = {
        backgroundColor: 'rgb(' + r + ', ' + g + ', ' + b + ')',
    }

    let hex;

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
      
        hex = "#" + r + g + b;
        return hex;
      }

    RGBToHex(r,g,b)

    return (
        <div style={styles} className='box-color'>
            <p className="box-p">rgb({props.r}, {props.g}, {props.b})</p>
            <p className="box-p">#{hex}</p>
        </div>
    )
}

export default BoxColor;