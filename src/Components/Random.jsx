import React from "react";
// import "../styles/Random.css";

const Random = (props) => {
    function generateRandomNum(min, max) {
        return Math.floor(Math.random() * (props.max - props.min) + props.min)
    };

    return (
        <div className="Random" >
            <p>Random value between {props.min} and {props.max}: {generateRandomNum()} <br/>
            </p> </div>);
};

export default Random;