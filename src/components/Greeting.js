import React from 'react';

const Greeting = ({ lang, children }) => {
  const i2 = {
    display: 'flex',
    margin: 15,
    padding: 5,
    borderStyle: 'solid',
    fontSize: '24px',
  };
  return (
    <div style={i2}>
      {languages({ lang })} {children}
    </div>
  );
};

const languages = ({ lang }) => {
  return lang === 'en'
    ? 'Hello'
    : lang === 'ro'
    ? 'Salut'
    : lang === 'es'
    ? 'Hola'
    : lang === 'de'
    ? 'Hallo'
    : lang === 'fr'
    ? 'Bonjour'
    : 'Hello';
};

export default Greeting;
