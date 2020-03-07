import React from "react";
import '../styles/Random.css';

function Random(props) {

    let min = props.min;
    let max = props.max;

    const random = Math.floor(Math.random() * (max - min + 1) + min);


    return (
        <div className="greetingsContainer">
            <p>Random number between {props.min} and {props.max}: {random}</p>
        </div>
    );
};
  
  export default Random;
  
