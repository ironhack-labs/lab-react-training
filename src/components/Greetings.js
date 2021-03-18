import React from 'react';
import '../assets/css/Greetings.css';

const greetingSalute = {
  de: 'Hallo',
  en: 'Hello',
  es: 'Hola',
  fr: 'Bonjour',
};

const Greetings = ({ lang, children }) => {
  return (
    <div className="Greetings">
      {greetingSalute[lang]} {children}
    </div>
  );
};

Greetings.defaultProps = {
  lang: 'es',
};

export default Greetings;
