import React from 'react'

const Greetings = ({lang, children}) => {
  const langGreet = {
    "de": "Hallo",
    "en": "Hello",
    "es": "Hola",
    "fr": "Bonjour"
  }

  const greeting = `${langGreet[lang]} ${children}`;

  return (
    <div className='comp greeting'>
      <p>{greeting}</p>
    </div>
  );
}

export default Greetings