import React from 'react';

export default function Greetings(props) {
  let lang = props.lang;
  let message = '';
  switch (lang) {
    case 'en':
      message = 'Good morning';
      break;
    case 'fr':
      message = 'Bonjour';
      break;

    case 'it':
      message = 'Ciao';
      break;
    case 'ru':
      message = 'Чао';
      break;

    case 'es':
      message = 'Hola';
      break;

    case 'ch':
      message = '再见';
      break;
    default:
      message = 'Hola';
      break;
  }
  return <div className="greetings">{message + ' ' + props.children}</div>;
}
