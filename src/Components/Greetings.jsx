import React from 'react';

const Greetings = ({lang, children}) => {
   let greeting
   switch (lang) {
    case 'en':
          greeting = 'Hello';
          break;
        case 'es':
          greeting = 'Hola';
          break;
        case 'fr':
          greeting = 'Bonjour';
          break;
        case 'de':
          greeting = 'Hallo';
          break;
        case 'it':
          greeting = 'Ciao';
          break;
        default:
          greeting = 'Hello';
          break;
   }
   return (
         <div className="greetings">
            {greeting} {children}
        </div>
      )
}

export default Greetings;
