import React from 'react';
import './BoxColor.css';

function BoxColor({r,g,b}){
    let hexcode = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    

    return(
        <div className="boxcolor-container" style={{backgroundColor: hexcode}}>
            <p className="text-color">rgb({r},{g},{b})</p>
            <p className="text-color">{hexcode}</p>
        </div>

    )

}

export default BoxColor;