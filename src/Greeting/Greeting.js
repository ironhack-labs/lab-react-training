import React from 'react';

export default function Greeting(props) {
  const { children, lang = '' } = props;

  const allGreetings = {
    de: 'Hallo ',
    en: ' Hello ',
    es: 'Ola ',
    fr: 'Bonjour ',
  };

  const greeting = allGreetings[lang];

  return (
    <div>
      {greeting}
      {children}
    </div>
  );
}
