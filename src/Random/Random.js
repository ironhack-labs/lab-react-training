import React from "react";

function Random(props) {
let max = props.max
let min = props.min
    return (
        Math.floor(Math.random(props) * (max -min) + min)
    )
}

export default Random;