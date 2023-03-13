import React from 'react'

function BoxColor({r,g,b}) {

  function trim (str) { // https://gist.github.com/whitlockjc/9363016
    return str.replace(/^\s+|\s+$/gm,'');
  }
  
  const rgbaToHex = (rgba) => { // https://gist.github.com/whitlockjc/9363016
    console.log(rgba)
    let inParts = rgba.substring(rgba.indexOf("(")).split(","),
        r = parseInt(trim(inParts[0].substring(1)), 10),
        g = parseInt(trim(inParts[1]), 10),
        b = parseInt(trim(inParts[2]), 10),
        a = parseFloat(trim(inParts[3].substring(0, inParts[3].length - 1))).toFixed(2);
    let outParts = [
      r.toString(16),
      g.toString(16),
      b.toString(16),
      Math.round(a * 255).toString(16).substring(0, 2)
    ];
  
    // Pad single-digit output values
    outParts.forEach(function (part, i) {
      if (part.length === 1) {
        outParts[i] = '0' + part;
      }
    })
  
    return ('#' + outParts.join(''));
  }

  return (
    <div className='row m-3 p-2 rounded' style={{backgroundColor: `rgba(${r},${g},${b})`}}>
      <div className='col'>
        rgba({r},{g},{b})
        <br></br>
        {rgbaToHex(`rgba(${r}, ${g}, ${b}, ${1})`)}
      </div>
    </div>
  )
}

export default BoxColor