import React from 'react'
import "./Greetings.css"

function Greetings({lang, children}) {
  let greeting = ""

  switch (lang) {
    case 'es':
      greeting = 'Hola';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'fr':
      greeting = 'bonjour';
      break;
    case 'de':
      greeting = 'Hallo';
      break;
    default:
    //no default
  }

  return (
    <>
      <div className="greeting">
        <p>
          {greeting}, {children}
        </p>
      </div>
    </>
  );
}

export default Greetings