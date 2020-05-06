import React from "react";

export default function Rating({score}) {

  switch ( Math.round(score)) {
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
      return <div>invalid </div>;
  }
}