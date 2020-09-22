import React from 'react';

const BoxColor = props => {
    const boxStyle = {
        border: '1px solid black',
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        border: "1px solid black",
        margin: 20,
        display: "flex",
        padding: 20,
        fontSize: 22,
        justifyContent: "center"
    }

    return (
        <div style={boxStyle}>
            rgb({props.r},{props.g},{props.b})
        </div>
    ) 
}

export default BoxColor;