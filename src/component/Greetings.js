import React from 'react';

function Greetings(props) {
  const { lang, children } = props;
  let greeting = '';

  switch (lang) {
    case 'de':
      greeting = `Hallo ${children}`;
      break;
    case 'en':
      greeting = `Hello ${children}`;
      break;
    case 'es':
      greeting = `Hola ${children}`;
      break;
    case 'fr':
      greeting = `Bonjour ${children}`;
      break;
    default:
      greeting = `Hello ${children}`;
  }

  return (
    <div className="border border-dark m-2 p-1">
      <p>{greeting}</p>
    </div>
  );
}

export default Greetings;
