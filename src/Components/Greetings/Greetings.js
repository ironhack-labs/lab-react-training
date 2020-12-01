import React from 'react';

export default function Greetings(props) {
  let greeting = '';
  switch (props.lang) {
    case 'en':
      greeting = 'Hello';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    case 'de':
      greeting = 'Hallo';
      break;
    case 'es':
      greeting = 'Hola';
      break;
  }

  return (
    <div>
      <h1>{greeting + ' ' + props.children}</h1>
    </div>
  );
}
