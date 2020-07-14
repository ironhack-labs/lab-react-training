import React from 'react'

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

function divStyle(r,g,b) {
    return{
            color: 'white', 
            backgroundColor:  rgbToHex(r,g,b)
        }
}

const BoxColor = props => {

    return (
        <div className='container-boxcolor' style={divStyle(props.r,props.g,props.b)} >
          <p>rgb({props.r},{props.g},{props.b})</p>
          <p>{rgbToHex(props.r,props.g,props.b)}</p>
        </div>
    )
}

export default BoxColor