import React from "react";

const BoxColor = (props) => {
    const { r, g, b } = props;

    const style = {
        backgroundColor: "rgb(" + r + "," + g + "," + b + ")",
        border: "1px solid black",
        margin: "10px 0"
    }

    const textStyle = {
        fontSize: "20px",
        margin: "25px 0",
        textAlign: "center",
        color: "white"
    }

    return (
        <div style={style}>
            <p style={textStyle}>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}

export default BoxColor;