import React from 'react'

function Greetings({ lang, children }) {

  let sayHi;
  if (lang === "de") {
    sayHi = "Hallo";
  } else if (lang === "en") {
    sayHi = "Hello";
  } else if (lang === "es") {
    sayHi = "Hola";
  } else if (lang === "fr") {
    sayHi = "Bonjour";
  }

  return (
    <div className='border p-2 m-2 d-flex'>
      <p>{sayHi} {children}</p>
    </div>
  )
}

export default Greetings