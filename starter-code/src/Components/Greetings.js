import React from 'react';

const Greetings = (props) => {
  let greeting;
  switch (props.lang) {
    case "de": greeting = "Hallo";
      break;
    case "fr": greeting = "Bonjour";
      break;
    case "en": greeting = "Hello";
      break;
    case "es": greeting = "Hola";
      break;
    default: greeting = "Hi";
  }

  return <p className="Greeting">{greeting} {props.children}</p>
}


export default Greetings;