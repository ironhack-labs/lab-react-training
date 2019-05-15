import React from "react";

const randNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const Random = ({ min, max }) => (
  <div className="box">
    <p>
      Random value betweem {min} and {max} => {randNumber(min, max)}
    </p>
  </div>
);

export default Random;
