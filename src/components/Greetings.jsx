

import React from 'react'

function Greetings({lang, children}) {
    const language = idioma => {
      switch (idioma) {
        case 'de':
          return 'Hallo';
        case 'en':
          return 'Hello';
        case 'fr':
          return 'Bonjour';
        default:
          return 'Hola';
      }
    }

  return (
    <div>
      <p>{language(lang)}</p>

      <p>{children}</p>
    </div>
  );
}

export default Greetings