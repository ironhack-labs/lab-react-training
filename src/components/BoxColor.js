import React from 'react'

const BoxColor = (props) => {
    //console.log(props)
    let color= "rgb(" + (props.r) + "," + (props.g) + "," + (props.b) + ")"
    let textColor= 'black'
    if(props.r === 255 && props.g === 0 && props.b === 0){
        textColor = 'white'
    }
    //RGB TO HEX
    function componentToHex(c) { 
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

  return (
    <div className='boxColor' style= {{backgroundColor:color, color:textColor}}>
        <div >RGB({props.r},{props.g},{props.b}) <br/> {rgbToHex(props.r,props.g,props.b)}</div>
    </div>
  )
}

export default BoxColor