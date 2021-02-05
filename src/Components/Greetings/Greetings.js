import React from 'react';

const Greetings = (props) => {
  let greet = '';
  switch (props.lang) {
    case 'de':
      greet = 'Hallo';
      break;
    case 'fr':
      greet = 'Bonjour';
      break;
    case 'en':
      greet = 'Hello';
      break;
    case 'es':
      greet = 'Hola';
      break;
    default:
      greet = 'Olá';
  }

  return (
    <div className="border border-dark m-2 p-1">
      <p>{`${greet} ${props.children}`}</p>
    </div>
  );
};

export default Greetings;