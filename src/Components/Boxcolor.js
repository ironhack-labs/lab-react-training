import React from 'react'
import '../css/boxColor.css'

//<BoxColor r={255} g={0} b={0} />


const Boxcolor = (props) => {
    var color = `rgb(${props.r}, ${props.g}, ${props.b})`;


    var textColor = () => {
if (props.r > 150) return 'white'
else return 'black'
    }

    
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
      

    return (
        <div className="boxColor" style={{background : color, color : textColor()}}>
            <p>rgb ({props.r}, {props.g}, {props.b})</p>
            <p>hex : {rgbToHex(props.r, props.g, props.b)}</p>
        </div>
    )
}

export default Boxcolor

