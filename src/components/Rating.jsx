import React from "react";

export default function Rating(props) {
  // console.log(Math.round(props.children))
  let score = Math.round(props.children);

  switch (score) {
    case 0:
      return <div>☆☆☆☆☆</div>;

    case 1:
      return <div>★☆☆☆☆</div>;

    case 2:
      return <div>★★☆☆☆</div>;

    case 3:
      return <div>★★★☆☆</div>;

    case 4:
      return <div>★★★★☆</div>;

    case 5:
      return <div>★★★★★</div>;

    default:
      return <div>Please insert valid rating</div>;
  }
}
