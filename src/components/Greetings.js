import React from "react";
import FancyBoder from './FancyBoder';
const Greetings = props => {
   
  let greeting = "";
  switch (props.lang) {
    case "en":
      greeting = "Hello";
      break;
    case "de":
      greeting = "Hallo";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    default:
      greeting = "Hola";
      break;
  }
  return (
    <FancyBoder>
    <p>
      {greeting} {props.children}
    </p>
    </FancyBoder>
  );
};

export default Greetings;
