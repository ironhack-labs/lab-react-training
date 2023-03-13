import React from 'react'

function Greetings({ lang, children }) {

  let greeting

  switch (lang) {
    case "en":
      greeting = "Hello";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "de":
      greeting = "Hallo";
      break;
    case "fr":
      greeting = "Salut";
      break;
    default:
      break;
  }

  return (
    <div className='row text-start m-3 border border-dark rounded p-2'>
      <div className='col'>
        {greeting} {children}
      </div>
    </div>
  )
}

export default Greetings