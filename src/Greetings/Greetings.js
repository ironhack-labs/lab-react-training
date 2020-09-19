import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  let greet = '';
  switch (props.lang) {
    // German
    case 'de':
      greet = 'Hallo';
      break;
    case 'en':
      greet = 'Hello';
      break;
    case 'es':
      greet = 'Hola';
      break;
    case 'fr':
      greet = 'Bonjour';
      break;
    default:
      greet = 'Hello';
  }

  return (
    <div className="greeting">
      <p>
        {greet} {props.children}{' '}
      </p>
    </div>
  );
};

export default Greetings;
