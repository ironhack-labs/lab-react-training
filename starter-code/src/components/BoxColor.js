import React from "react";
import 'bulma/css/bulma.css'
import './../index.css'


function BoxColor(props){

    let rgb = [ `${props.r} , ${props.g} , ${props.b}`];

    let styles= {
        backgroundColor: `rgb(${rgb})`

    };

    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
      
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
      
    
    return(
        <div className="BoxColor has-text-centered" style={styles}>
            <h1 className="is-size-3"> rgb( {props.r} , {props.g} , {props.b})</h1>
            <p className="is-size-4">{rgbToHex(props.r, props.g , props.b)}</p>
        </div>
    )
    
}

export default BoxColor;