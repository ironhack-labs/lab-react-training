import React from 'react';

function Greetings(props) {
  function message(lang) {
    switch (lang) {
      case 'de':
        return 'Halo';

      case 'es':
        return 'Hola';

      case 'fr':
        return 'Bonjour';

      default:
        return 'Hello';
    }
  }

  return (
    <div>
      <p>
        {message(props.lang)} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
