import React from 'react';

const Greetings = ({ lang, children }) => {
  function getGreetings(lang) {
    const langs = {
      de: 'Hallo',
      en: 'Hello',
      es: 'Hola',
      fr: 'Bonjour',
    };
    return langs[lang];
  }
  return (
    <div className="card">
      <span>
        {getGreetings(lang)} {children}
      </span>
    </div>
  );
};

export default Greetings;
