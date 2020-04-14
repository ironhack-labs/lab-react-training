import React from "react";

const Random = (props) => {
  return (
    <div className="box">
      Random value between {props.min} and {props.max} =>
      {Math.floor(Math.random() * (props.max - props.min)) + props.min}
    </div>
  );
};

export default Random;
