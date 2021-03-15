import React from 'react'
import "../styles/Greetings.css";

function Greetings(props) {
  let greeting;
  switch (props.lang) {
    case 'de':
      greeting = "Halo";
      break;
    case 'fr':
      greeting = "Bonjour";
      break;
    case 'en':
        greeting = "Hello";
        break;
    case 'es':
        greeting = "Hola";
        break;
    default:
        greeting = "Hello";
  }
    return (
            <div className="greetingRow"lang={props.lang}>
                <p>{greeting} {props.children}</p>
            </div>
    )
}

export default Greetings
