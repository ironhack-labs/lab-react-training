import React from 'react';

export default function Greetings(props) {
  let greeting = '';
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Salut';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    default:
      greeting = 'Hey';
  }
  return (
    <div className="Greetings">
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
}
