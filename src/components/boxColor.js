import React from 'react';

function BoxColor({r,g,b}){
    let hexcode = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    return(
        <div style={{backgroundColor: hexcode}}>
            <p>rgb({r},{g},{b})</p>
            <p>{hexcode}</p>
        </div>

    )

}

export default BoxColor;