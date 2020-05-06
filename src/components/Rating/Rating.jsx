import React from "react";

export default function Rating(props) {
  const generateStars = () => {
    const numberOfStars = Math.round(props.children);
    switch (true) {
      case numberOfStars < 1:
        return "☆☆☆☆☆";
      case numberOfStars < 2:
        return "★☆☆☆☆";
      case numberOfStars < 3:
        return "★★☆☆☆";
      case numberOfStars < 4:
        return "★★★☆☆";
      case numberOfStars < 5:
        return "★★★★☆";
      case numberOfStars < 6:
        return "★★★★★";
      default:
        return "☆☆☆☆☆";
    }
  };

  return <div>{generateStars()}</div>;
}
