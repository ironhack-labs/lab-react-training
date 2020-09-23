import React from 'react';
import './Greetings.css';

function Greetings(props) {
  let greetings = '';
  switch (props.lang) {
    case 'de':
      greetings = 'Hallo';
      break;
    case 'fr':
      greetings = 'Bonjour';
      break;
    case 'es':
      greetings = 'Hola';
      break;
    case 'en':
    default:
      greetings = 'Hello';
      break;
  }
  return (
    <p>
      {greetings} {props.children}
    </p>
  );
}

export default Greetings;
