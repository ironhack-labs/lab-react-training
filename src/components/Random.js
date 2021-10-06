//Random.js
import React from "react";

function Random(props) {
  const { min, max } = props;
  const numRan = Math.floor(Math.random() * (max - min)) + min;

  return (
    <div>
      Random value between {min} and {max} ={">"} {numRan}
    </div>
  );
}

export default Random;
