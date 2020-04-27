import React from "react";
import "./Greetings.css"

export default function Greetings(props) {
  let text;
  switch (props.lang) {
    case "de":
      text = "Hallo";
      break;
    case "fr":
      text = "Bonjour";
      break;
      default: text = "Hello";
  }

  return (
    <div className="greetings">
      <strong>
        {text} {props.children}{" "}
      </strong>
    </div>
  );
}
