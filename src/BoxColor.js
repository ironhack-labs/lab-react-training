import React from "react";

export default function BoxColor(props) {
    const divStyle = {
        background: `rgb(${props.r},${props.g},${props.b})`,
        margin: '8px',
        padding: '5px',
        'fontSize': 'xx-large',
        'textAlign': 'center',
        height: '100px',
        width: '800px',
        border: '2px solid black',
        position: 'relative'
    }

    const txtColor = defineTxtColor(props.r, props.g, props.b);
    const txtStyle = {
        color: `rgb(${txtColor.r},${txtColor.g},${txtColor.b})`,
        top: '50%',
        left: '50%',
        position: 'absolute',
        'transform': 'translate(-50%, -50%)',
    }
    
    return(
        <div className="BoxColor" style={divStyle}>
                <span style={txtStyle}>rgb({props.r},{props.g},{props.b}) <br/> #{("0" + parseInt(props.r).toString(16)).slice(-2)}{("0" + parseInt(props.g).toString(16)).slice(-2)}{("0" + parseInt(props.b).toString(16)).slice(-2)} </span>
        </div>
    );

    // https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
    function defineTxtColor(r,g,b) {
        if ( (parseInt(r)*0.299 + parseInt(g)*0.587 + parseInt(b)*0.114) > 186) return {r: 0, g: 0, b: 0}
        return {r:255, g:255, b:255}
    }
}