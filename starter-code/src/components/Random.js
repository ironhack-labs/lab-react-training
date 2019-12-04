import React from "react";

function Random(props) {
    return (
        <section id="random">
        <p>
        Random value between {props.min} 
        and {props.max} => {Math.floor( Math.random()*(props.max - props.min) + props.min ) }  </p>
        </section>
    );
}

export default Random;