import React from "react";
import "./Random.css";

export default function Random(props) {
  return (
    <div className="random">
      Random value between {props.min} and {props.max} => 
       &nbsp;{Math.floor(Math.random() * (props.max - props.min + 1) + props.min)}
    </div>
  );
}
