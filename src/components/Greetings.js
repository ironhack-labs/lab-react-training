import React from 'react';

const Greetings = (props) => {
  let helloWord;

  switch (props.lang) {
    case 'pt':
      helloWord = 'Olá';
      break;
    case 'es':
      helloWord = 'Hola';
      break;
    case 'de':
      helloWord = 'Hallo';
      break;
    case 'fr':
      helloWord = 'Bonjour';
      break;
    default:
      helloWord = 'Hello';
      break;
  }

  return (
    <h1 className="greetings">
      {helloWord} {props.children}
    </h1>
  );
};

export default Greetings;
