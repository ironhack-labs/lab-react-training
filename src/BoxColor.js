import React, { Component } from 'react'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

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


class BoxColor extends Component {
    render() {
        let r = getRandomInt(0,255);
        let g = getRandomInt(0,255);
        let b = getRandomInt(0,255);
        let color = `rgb(${r},${g},${b})`
        return (
            <div className='borderWrapper' style={{backgroundColor: color}}>
                <p>{color}</p>
                <p>{RGBToHex(r,g,b)}</p>
            </div>
        )
    }
}

export default BoxColor
