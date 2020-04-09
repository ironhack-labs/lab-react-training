import React from 'react';
import './Greetings.css';

const Greetings = (props) => {

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
    <div className="Greetings">
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
};

export default Greetings;