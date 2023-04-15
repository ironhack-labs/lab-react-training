import React from "react";

function Greetings(props) {
  let greeting;

  switch (props.lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "en":
      greeting = "Hello";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    default:
      greeting = "Hello";
  }

  return (
    <div className="Greetings">
      {greeting} {props.children}
    </div>
  );
}

export default Greetings;
