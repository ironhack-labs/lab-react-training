import React from 'react';

function BoxColor (props) {
    let r= props.r;
    let g= props.g;
    let b= props.b;

    return (
        <div className="BoxColor" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
            <p>
                rgb({props.r},{props.g},{props.b})

            </p>
        </div>
    );
}

export default BoxColor;