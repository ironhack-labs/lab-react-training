import './index.css';
import React from 'react';

function Greetings({ lang, children }) {
  if (lang === 'de') {
    lang = 'Hallo';
  } else if (lang === 'fr') {
    lang = 'Bonjour';
  } else if (lang === 'es') {
    lang = 'Hola';
  } else if (lang === 'en') {
    lang = 'Hello';
  }

  return (
    <div className="Greetings">
      <p>
        {lang} {children}
      </p>
    </div>
  );
};

export default Greetings;
