import React from 'react';
 
const Greetings = (props) => {
  return (
  <div className="app-div-black-border-box">
    <span>{createGreeting(props.lang)} {props.children}</span>
  </div>
  )
}

const createGreeting = (lang) => {
  let greeting = 'Hello'
  switch (lang) {
    case 'en':
      greeting = 'Hello'
      break;
    case 'fr':
      greeting = 'Bonjour'
      break;
    case 'de':
    case 'nl':
      greeting = 'Hallo'
      break;
    default:
      greeting = 'Hello'
  }
  return greeting;
}

export default Greetings;