import React from "react";

function Greetings({ lang, children }) {
  const greet = {
    de: 'Hallo',
    fr: 'Bonjour',
    en: 'Hello',
    es: 'Hola',
  };
  return (
    <p>
      {greet[lang]} {children}
    </p>
  );
}

export default Greetings;