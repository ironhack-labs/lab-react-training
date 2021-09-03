import React from 'react';
import './Greetings.css';

const Greetings = ({ lang, children }) => {
    let temp = '';
  switch (lang) {
    case 'de':
        temp = 'Hallo ';
      break;
    case 'en':
        temp = 'Hello ';
      break;
    case 'es':
        temp =  'Hola ';
      break;
    case 'fr':
        temp = 'Bonjour ';
      break;
    default:
  }
  return <div className="allGreetings">
    <div>
    <p>{temp}{children}</p>
     </div>

  </div>;
};

export default Greetings;
