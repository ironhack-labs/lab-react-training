import React from "react";

function Random(props) {
  let randomNumber 
  = Math.floor(Math.random() * (props.max - props.min) + props.min);

  return (
    <div>
      <h3>
        {" "}
        Random value bewteen {props.min} and {props.max}: {randomNumber}{" "}
      </h3>
    </div>
  );
}

export default Random;
