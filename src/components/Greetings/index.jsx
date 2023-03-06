import React from 'react';

const langConfig = {
  en: 'Hello',
  es: 'Hola',
  fr: 'Hallo',
  de: 'Bonjour',
};

function Greetings({ lang, children }) {
  return (
    <div>
      {langConfig[lang]} {children}
    </div>
  );
}

export default Greetings;
