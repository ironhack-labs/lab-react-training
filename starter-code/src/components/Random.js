import React from "react";
import {randNumber} from "../helpers/functions";

const Random = ({ min, max }) => (
  <div className="box">
    <p>
      Random value betweem {min} and {max} => {randNumber(min, max)}
    </p>
  </div>
);

export default Random;
