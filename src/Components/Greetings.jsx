import React from 'react'

const Greetings = (props) => {
  function checkLanguage(prop) {
    let greeting;
    switch(prop) {
    case "de":
      greeting = "Hallo ";
      break;
    case "en":
      greeting = "Hello ";
      break;
    case "es":
      greeting = "Hola ";
      break;
    case "fr":
      greeting = "Bonjour ";
      break;
    default:
      greeting = "Hello ";
    }
    return greeting;
  }

  return (
    <div>
      <p>{checkLanguage(props.lang)}{props.children}</p>   
    </div>
  )
}

export default Greetings;
