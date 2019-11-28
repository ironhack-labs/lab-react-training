import React from "react";

export default function Greetings(props) {
  const greetings = { de: "Hallo", fr: "Bonjour" };
  return (
    <div className="box">
      <h2>
        {greetings[props.lang]} {props.children}
      </h2>
    </div>
  );
}
