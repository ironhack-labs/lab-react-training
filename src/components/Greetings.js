import React from 'react';

const Greetings = (props) => {
  function message(lang) {
    switch (lang) {
      case 'de':
        return 'Halo, ';
        break;

      case 'es':
        return 'Hola, ';
        break;

      case 'fr':
        return 'Bonjour, ';
        break;

      default:
        return 'Hello, ';
        break;
    }
  }
  return (
    <div>
      <p class="container">
        {message(props.lang)}
        {props.children}
      </p>
    </div>
  );
};

export default Greetings;
