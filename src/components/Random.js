import React from "react";
import FancyBoder from "./FancyBoder";
const Random = props => {
  let randomResult = Math.floor(Math.random() * props.max) + props.min;
  return (
    <FancyBoder>
      <p>Random value between {props.min} and {props.max}=> {randomResult}</p>
    </FancyBoder>
  );
};

export default Random;
