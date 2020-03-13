import React from "react";
import "./Rating.css";

const Rating = ({ children }) => {
    let childrenRounded = Math.round(children);
  return (
    <div className="rating-container">
      <div>{childrenRounded}</div>
    </div>
  );
};

export default Rating;
