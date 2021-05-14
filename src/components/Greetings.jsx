import React from 'react';

const greetings = {
  fr: 'Bonjour',
  en: 'Hello',
  de: 'Hallo',
  es: 'Hola',
};

function Greetings(props) {
  const { children, lang } = props;
  return (
    <div>
      {greetings[lang]} {children}
    </div>
  );
}

export default Greetings;
