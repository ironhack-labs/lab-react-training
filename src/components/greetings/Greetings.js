import React from 'react';

function Greetings(props) {
  const { children, lang } = props;
  const translation = {
    de: 'Hallo',
    fr: 'Bonjour',
    es: 'Hola',
    en: 'Hello',
  };
  return (
    <div>
      {' '}
      {translation[lang]} {children}
    </div>
  );
}

export default Greetings;
