import React from "react";

function Rating(props) {
  let rating = Math.round(props.children);
  let render = [];

  for (let i = 0; i <= rating - 1; i++) {
    render.push("★");
  }

  for (let i = render.length; i < 5; i++) {
    render.push("☆");
  }

  return (
    <div>
      <p>{render.join(" ")}</p>
    </div>
  );
}

export default Rating;
