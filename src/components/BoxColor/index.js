import React from 'react'

function BoxColor({r,b, g}) {

  function rgbToHex(r,g,b) {return '#'+toHex(r)+toHex(g)+toHex(b)}
  function toHex(n) {
   n = parseInt(n,10);
   if (isNaN(n)) return "00";
   n = Math.max(0,Math.min(n,255));
   return "0123456789ABCDEF".charAt((n-n%16)/16)
        + "0123456789ABCDEF".charAt(n%16);
  }
  


  return (

    <div style={{backgroundColor: `rgb(${r},${g},${b})`, display:'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', border: '1px solid black'}}>
      <p> rbg({r},{b},{g}) </p>
      <p>{rgbToHex(r,g,b)}</p>
    </div>
  )
}

export default BoxColor
