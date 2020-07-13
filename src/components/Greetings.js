import React from 'react';

const Greetings = (props) => {
  let greeting;
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hello';
  }
  return (
    <div className="box">
      <h1>
        {greeting} {props.children}
      </h1>
    </div>
  );
};

export default Greetings;
