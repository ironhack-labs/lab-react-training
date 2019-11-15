import React from "react";

const Random = ({ minNumber, maxNumber }) => (
  <div className="cards">
    <p>
      random value between {minNumber} and {maxNumber} is
      {Math.floor(Math.random() * maxNumber)}
    </p>
  </div>
);

export default Random;
