import React from 'react';
import './greetings.css';

function Greetings(props) {
  let greeting = '';

  switch (props.lang) {
    case 'en':
      greeting = `Hello ${props.children}`;
      break;
    case 'es':
      greeting = `Hola ${props.children}`;
      break;
    case 'fr':
      greeting = `Bonjour ${props.children}`;
      break;
    case 'de':
      greeting = `Hallo ${props.children}`;
      break;
    default:
      break;
  }

  return <div className="the-border greeting">{greeting}</div>;
}

export default Greetings;
