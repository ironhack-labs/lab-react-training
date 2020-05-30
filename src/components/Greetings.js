import React from 'react';
import './Greetings.css';

function Greetings(props) {
  let greeting;
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Salut';
      break;
    default:
      greeting = 'Ciao';
  }
  return (
    <div className="greeting">
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
