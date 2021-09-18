import React from 'react';

export const Greetings = ({ lang, children }) => {
  const finalLang = () => {
    if (lang === 'de') {
      return 'Hallo';
    } else if (lang === 'en') {
      return 'Hello';
    } else if (lang === 'es') {
      return 'Hola';
    } else if (lang === 'fr') {
      return 'Bonjour';
    } else {
      ('Greetings to');
    }
  };
  return (
    <div>
      {finalLang}
      {children}
    </div>
  );
};
