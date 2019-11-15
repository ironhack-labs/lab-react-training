import React from "react";

const Rating = ({ numberOfStars }) => (
  <div>
    <p>
      my rating is {"★".repeat(numberOfStars)}
      {"☆".repeat(5 - numberOfStars)}
    </p>
  </div>
);

export default Rating;
