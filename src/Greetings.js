import React from 'react';

export default function Greetings(props) {
  var hi = '';
  switch (props.lang) {
    case 'en':
        hi = 'hello'
      break;
    case 'de':
        hi = 'hallo'
      break;
    case 'fr':
        hi = 'bonjour'
      break;
    case 'es':
        hi = 'hola'
      break;
  }
  return <div className="Greetings">
      {hi} {props.children}
  </div>;
}
