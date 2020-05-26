import React from 'react';
import './idcard.css';

const Greetings = (props) => {
  const lang = props.lang;
  let message = '';

  switch (lang) {
    case 'de':
      message = 'Hallo';
      break;

    case 'fr':
      message = 'Bonjour';
      break;

    case 'en':
      message = 'Hello';
      break;
    case 'es':
      message = 'Hola';
      break;

    default:
      message = 'Hello';
      break;
  }

  return (
    <div className="idcardStyle">
      <p>
        {message} {props.children}
      </p>
    </div>
  );
};

export default Greetings;
