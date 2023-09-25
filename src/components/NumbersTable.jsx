import React from "react";
import { useState } from "react";

function NumbersTable({ limit }) {
  const boxArray = [];

  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
      boxArray.push(
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            border: "2px solid black",
            margin: 0,
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
          }}
        >
          {" "}
          {i}
        </div>
      );
    } else {
      boxArray.push(
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "white",
            border: "2px solid black",
            margin: 0,
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
          }}
        >
          {i}
        </div>
      );
    }
  }

  return (
    <div className="carousel-box">
      {boxArray.map((e, i) => {
        return <h6 key={i}>{e}</h6>;
      })}
    </div>
  );
}

export default NumbersTable;
