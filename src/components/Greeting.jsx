import React from 'react';

const Greetings = ({ lang, children }) => {
  let greeting;
  switch (lang) {
    case 'es':
      greeting = 'Hola';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hello';
  }
  return (
    <div className="greetings">
      {greeting} {children}
    </div>
  );
};

export default Greetings;
