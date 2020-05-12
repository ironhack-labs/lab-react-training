import React from "react";

export default function Random(props) {
    return (
        <div className="Random">
            Random value between {props.min} and {props.max} => {random(props.min, props.max)}
        </div>
    );
}

function random(min, max) {
    const rnd = Math.random();
    const p2 = rnd*(max-min);
    return parseInt(min) + Math.floor(p2);
}