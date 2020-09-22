import './Components.css'

import React from 'react'

export default function BoxColor(props) {
    console.log(props)

    let divStyle = {
     'background-color': `rgb(${props.r}, ${props.g}, ${props.b})`
      };

    let spanStyle = {
        color: +props.hex
        
    }  

        return <div className="boxcolor" style={divStyle}> <span className="boxspan" style={spanStyle}> rgb({props.r}, {props.g}, {props.b}) {props.hex}</span></div>;
      
    }

