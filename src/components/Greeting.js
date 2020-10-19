import React from 'react';

function Greeting(props) {
  function renderGreeting(lang) {
    const cases = {
      en: 'Hello!',
      es: 'Hola!',
      de: 'Hallo!',
      fr: 'Bonjour!',
    };

    return cases[lang];
  }

  return (
    <div className="box-container">
      {`${renderGreeting(props.lang)} ${props.children}`}
    </div>
  );
}

export default Greeting;
