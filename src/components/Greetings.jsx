import React from 'react';

function Greetings(props) {
  let greeting;
  switch (props.lang) {
    case 'fr':
      greeting = 'Bonjour ';
      break;
    case 'en':
      greeting = 'Hello ';
      break;

    case 'es':
      greeting = 'Hola ';
      break;

    case 'de':
      greeting = 'Hallo ';
      break;

    default:
      greeting = 'hiiii ';
      break;
  }

  greeting += props.children;

  return (
    <div>
      <p>{greeting}</p>
    </div>
  );
}

export default Greetings;
