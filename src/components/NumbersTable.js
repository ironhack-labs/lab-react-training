import React from "react";

export default function NumbersTable(props) {
  let cards = [];
  let cardStyle = {
    height: "100px",
    width: "100px",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "100px",
    fontSize: "xx-large",
    border: "2px solid",
  };
  // https://alligator.io/react/rendering-arrays-in-react/
  for (let index = 1; index <= props.limit; index++) {
    cards.push(
      <div key={index} style={{ ...cardStyle, background: index % 2 ? "white" : "red" }}>
        {index}
      </div>
    );
  }

  //console.log(cards);
  return <div style={{ display: "flex", flexWrap: "wrap" }}>{cards}</div>;
}
