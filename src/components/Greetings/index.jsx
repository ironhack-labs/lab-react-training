import React from 'react';
import './index.css';

const langConfig = {
  en: 'Hello',
  es: 'Hola',
  fr: 'Bonjour',
  de: 'Hallo',
};

function Greetings({ lang, children }) {
  return (
    <div className="Greetings">
      {langConfig[lang]} {children}
    </div>
  );
}

export default Greetings;
