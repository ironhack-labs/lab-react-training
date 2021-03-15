import React from "react";
// import "../styles/BoxColor.css";

const BoxColor = (props) => {
    function generateBoxColor() {
        const styleObj = {
            backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
            border: "2px black solid"
        };
        return (
        <div style={styleObj}>
        rgb({props.r}, {props.g}, {props.b})
        </div>
        )
    };

    return (
        <div className="BoxColor" >
        {generateBoxColor(props.r, props.g, props.b)}
        </div>);
};

export default BoxColor;