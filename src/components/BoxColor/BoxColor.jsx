import React from 'react'

export default function BoxColor(props) {

    const divStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        width: '400px',
        height: '100px',
        margin: '20px', 
    };

    return (
        <div style={divStyle}>
            <h2>rgb({props.r},{props.g},{props.b});</h2>
        </div>
    )
}
