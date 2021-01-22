import React from 'react';

const BoxColor = props => {
    const boxStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        border: "1px solid black",
        display: "flex",
        height: "100px",
        width: "99%",
        marginTop: "10px",
        justifyContent: "center",
        alignItems: "center"
    }

    return(
        <div style={boxStyle}>
            <p>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}

export default BoxColor;