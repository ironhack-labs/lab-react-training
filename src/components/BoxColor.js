import React from 'react';

function BoxColor (props) {
    let r= props.r;
    let g= props.g;
    let b= props.b;

    let rToHex = props.r.toString(16);
    let gToHex = props.g.toString(16);
    let bToHex = props.b.toString(16);

    if (rToHex.length < 2) {
        rToHex = '0' + rToHex;
    } 
    if (gToHex.length < 2) {
        gToHex = '0' + gToHex;
    } 
    if (bToHex.length < 2) {
        bToHex = '0' + bToHex;
    } 

    return (
      <div
        className="BoxColor"
        style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      >
        <p>
          rgb({props.r},{props.g},{props.b})
        </p>
        <p>
          #{rToHex}
          {gToHex}
          {bToHex}
        </p>
      </div>
    );
}

export default BoxColor;