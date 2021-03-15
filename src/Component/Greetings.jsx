import React from 'react';

const Greetings = ({ lang, children }) => {
  function greeting() {
    switch (lang) {
      case 'de':
        return 'Guten Tag'
        break;
      case 'fr':
        return 'Bonjour';
        break;
      case 'en':
        return 'Wassup';
        break;
      case 'esp':
        return 'hola';
        break;

      default:
        return 'Are you an Alien?';
    }
  }
  return (
    <div>
    <p>{greeting()} {children}</p> 
    </div>
  ) 
};

export default Greetings;
