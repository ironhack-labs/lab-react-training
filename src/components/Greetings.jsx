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
      <span>{language(lang)}</span><span> </span><span>{children}</span>
    </div>
  );
}

export default Greetings    

