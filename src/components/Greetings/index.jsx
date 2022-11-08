import React from 'react';

export const Greetings = ({ lang, children }) => {
  let greeting;
  if (lang === 'de') {
    greeting = 'Hallo';
  } else if (lang === 'en') {
    greeting = 'Hello';
  } else if (lang === 'es') {
    greeting = 'Hola';
  } else if (lang === 'fr') {
    greeting = 'Bonjour';
  }
  console.log(children);

  return (
    <div>
      <p>{greeting} {children}</p>
    </div>
  );
};
