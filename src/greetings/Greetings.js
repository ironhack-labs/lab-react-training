import React from 'react';

const Greetings = ({ lang, children }) => {
  let greet = '';
  switch (lang) {
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
  }
  return (
    <div>
      <h2>
        {greet} {children}
      </h2>
    </div>
  );
};

export default Greetings;
