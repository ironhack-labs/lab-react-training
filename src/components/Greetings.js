import React from 'react';

function Greetings(props) {
  let word = '';

  switch (props.lang) {
    case 'de':
      word = 'Hallo';
      break;
    case 'fr':
      word = 'Bonjour';
      break;
    case 'es':
      word = 'Hola';
      break;
    case 'en':
      word = 'Hello';
      break;
    default:
      word = 'Olá';
  }

  return (
    <div className="border border-dark m-2 d-flex p-1">
      <p>
        {word} {props.children}
      </p>
    </div>
  );
}
export default Greetings;
