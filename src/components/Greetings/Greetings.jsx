/*JSX DE LA INTERACCIÓN 2*/

import React from 'react';
import './Greetings.css';

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