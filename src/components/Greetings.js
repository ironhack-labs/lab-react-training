import React from 'react';

function Greetings(props) {
  function renderGreeting(lang) {
    const langs = {
      en: 'Hello',
      es: 'Hola',
      fr: 'Bounjour',
      de: 'Hallo'
    }

    return langs[lang];
  }

  return (
    <div>
      <p>{`${renderGreeting(props.lang)}, ${props.children}`}</p>
    </div>
  )
}

export default Greetings;