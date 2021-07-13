import React from 'react';

function Greetings({ lang, children }) {
  let greet = "";
  switch (lang) {
    case 'en':
      greet = 'Hello';
      break;
    case 'fr':
      greet = 'Bonjour';
      break;
  }
  return (
    <div>
      {greet} {children}
    </div>
  );
}

export default Greetings;
