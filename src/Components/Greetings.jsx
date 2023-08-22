import React from 'react';

const Greetings = (props) => {
  const { lang, children } = props;

  const greetingsMap = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour'
  };

  const greeting = greetingsMap[lang] || greetingsMap['en'];

  return (
    <div className="greetings">
      {greeting}, {children}!
    </div>
  );
};

export default Greetings;
