
import React from 'react';



export function BoxColor (props, children) {
    let rgb = []
    for (var i = 0; i < 3; i++) {
      let r = Math.floor(Math.random() * 255)
      rgb.push(r)
    }
    var styles = {
      margin: '20px',
      width: '400px',
      height: '250px',
      backgroundColor: `rgb(${rgb})`,
      display: 'inline-block',
    };
    return (
      <div>
        <div style={styles}>
        </div>
      </div>
    )
}

/* intentos fallidos:
export function BoxColor (props) {
    console.log("props", props.r, props.g, props.b)

    var styles = {
      margin: '20px',
      width: '400px',
      height: '250px',
      backgroundcolor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      display: 'inline-block',
    };
    return (
      <div>
        <div style={styles}>
        </div>
      </div>
    )
}
*/