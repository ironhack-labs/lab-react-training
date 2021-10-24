import React from 'react';

function Greetings(props) {
  function greeting(lang) {
    switch (lang) {
      case 'fr':
        return 'Bonjour';
      case 'de':
        return 'Hallo';
      case 'es':
        return 'Hola';
      case 'en':
        return 'Hello';
    }
  }

  return (
    <div>
      <p>
        <b>
          {greeting(props.lang)} {props.children}
        </b>
      </p>
    </div>
  );
}

export default Greetings;
