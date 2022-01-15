import React from "react";
import "./Random.css"

const Random = (props) => {
   let min = Math.ceil(props.min);
   let max = Math.floor(props.max);
    return <p className="Random">Random value betwenn {props.min} and {props.max} ={'>'} {Math.floor(Math.random() * (max - min)) + min}</p>
}
export default Random;