import React from 'react';
import 'bulma/css/bulma.css';
import './BoxColour.css'

const BoxColour = props =>{
    const r = props.r
    const g = props.g
    const b = props.b
    
    var rgbToHex = function (rgb) { 
        var hex = Number(rgb).toString(16);
        if (hex.length < 2) {
             hex = "0" + hex;
        }
        return hex;
      };
    
    var fullColorHex = function(r,g,b) {   
        var red = rgbToHex(r);
        var green = rgbToHex(g);
        var blue = rgbToHex(b);
        return red+green+blue;
      };


    return (
        <div className='box' style={{ background: `rgb(${r},${g},${b})` }}>
            <div className="columns">
                <div className="column">
                    <h1>
                        <p>RGB({r},{g},{b})</p>
                        <p>#{fullColorHex(r,g,b)}</p>
                        </h1>
                </div>
            </div>
        </div>
    )

}

export {BoxColour}