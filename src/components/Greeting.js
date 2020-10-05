import React from 'react';

function Greeting(props) {
  function renderGreeting(lang) {
    const langCases = {
      en: 'Hello',
      es: 'Hola',
      fr: 'Bonjour',
      de: 'Hallo',
    };
    return langCases[lang];
  }

  return (
    <div className="Card">
      {`${renderGreeting(props.lang)} ${props.children}`}
    </div>
  );
}

export default Greeting;
