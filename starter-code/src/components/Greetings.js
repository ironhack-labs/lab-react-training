import React from 'react';
import { Greeting } from "../styles/components";

function GreetingComponent (porps) {
  let greeting;

  switch (porps.lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "en":
      greeting = "Hellow";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    default:
      greeting = "Hi"
      break;
  }

  return(
    <Greeting>
      <p>{greeting} {porps.children}</p>
    </Greeting>
  );
}

export default GreetingComponent;