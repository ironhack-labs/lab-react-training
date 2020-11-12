import React from 'react';
import './Greetings.css';

function Greetings(props) {
  function message(lang) {
    switch (lang) {
      case 'de':
        return 'Hallo ';
      case 'en':
        return 'Hello ';
      case 'es':
        return 'Hola ';
      case 'fr':
        return 'Bonjour ';
      default:
        throw new Error('Idioma não suportado');
    }
  }

  return (
    <div className="hi">
      {message(props.lang)}
      {props.children}
    </div>
  );
}

export default Greetings;
