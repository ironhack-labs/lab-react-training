import React from 'react';
import './Greetings.css';

function Greetings(props) {
  let language = '';
  switch (props.lang) {
    case 'de':
        language = 'Hallo';
      break;

    case 'es':
        language = 'Hola';
      break;

    case 'fr':
        language = 'Bonjour';
      break;

    default :
        language = 'Hello';
        break;
  }
  
  return (
    <div className="greetings" >
      <h1>
        {language} {props.children}
      </h1>
    </div>
  );
}

export default Greetings;