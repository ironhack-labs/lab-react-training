import React from 'react';

const Greetings = (props) => {
  let greet;
  switch (props.lang) {
    case 'es':
      greet = 'Hola';
      break;
    case 'en':
      greet = 'Hi';
      break;
    case 'fr':
      greet = 'Bonjour';
      break;
    case 'de':
      greet = 'Hallo';
      break;
    default:
      greet = 'Buenas';
      break;
  }

  return (
    <div className="border border-dark px-2 my-2">
      {greet} {props.children}
    </div>
  );
};

export default Greetings;
