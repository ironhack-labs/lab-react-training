import React from 'react';

function Greetings (props) {
  let greeting = '';
  switch (props.lang) {
    case "de":
      greeting = 'Hallo';
      break;
    case "en":
      greeting = 'Hello';
      break;
    case "es":
      greeting = 'Hola';
      break;
    case "fr":
      greeting = 'Bonjour';
      break;
    case "pt":
      greeting = 'Olá';
      break;
    default:
      greeting = 'Hello';
      break;
  }  
  return (
    <div className="greetings border">
      <p>{greeting} {props.children}</p>
    </div>
  );
}

export default Greetings;

