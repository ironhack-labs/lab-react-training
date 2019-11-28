import React from "react";

export default function Rating(props) {
  return (
    <div className="rating">
      <p>
        {"★".repeat(Math.round(props.children))}
        {"☆".repeat(5 - Math.round(props.children))}
      </p>
    </div>
  );
}
