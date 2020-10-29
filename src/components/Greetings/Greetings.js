import React from 'react';

import './Greetings.css';

const langEnum = {
  de: "Hallo",
  en: "Hello",
  es: "Hola",
  fr: "Bonjour",
};

const Greetings = ({ lang, children }) => {

  const langGreeting = lang => langEnum[lang] ? langEnum[lang] : 'Saluton';

  return (
    <div className="greetings-container">
      <h2>{langGreeting(lang)} {children}</h2>
    </div>
  );
};

export default Greetings;
