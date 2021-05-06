import React from 'react';

function Greetings(props) {
  let hi = '';
  switch (props.lang) {
    case 'de':
      hi = 'Hallo';
      break;
    case 'en':
      hi = 'Hello';
      break;
    case 'fr':
      hi = 'Bonjour';
      break;
    case 'es':
      hi = 'Hola';
      break;
  }
  return (
    <div>
      {hi} {props.children}
    </div>
  );
}

export default Greetings;
