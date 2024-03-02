import React from 'react'

// eslint-disable-next-line react/prop-types
export default function Greetings({lang, children}) {

  let greeting = " ";

  switch(lang){
    case ("de"):
        greeting = "Hallo";
        break;
    case ("en"):
        greeting = "Hello";
        break;
    case ("es"):
        greeting = "Hola";
        break;
    case ("fr"):
        greeting = "Bonjour";
        break;
  }

  return (
    <div className="text-box">
        <p>{greeting} {children}</p>
    </div>
  )
}
