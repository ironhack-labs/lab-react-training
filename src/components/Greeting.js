import React from 'react';

function Greeting(props) {
  function renderGreeting(lang) {
    // Usando objeto literal pra substituir switch/case
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
      {/* {renderGreeting(props.lang)} {props.children} */}
    </div>
  );
}

export default Greeting;
