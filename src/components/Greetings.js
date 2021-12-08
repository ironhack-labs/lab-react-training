// components // Greetings.js
// 1 Importaciones
import React from "react"

//2 Exportacion de funcion

//greetings
const Greetings = ({ lang, children }) => {
    let greeting = '';
    switch (lang) {
      case 'de':
        greeting = 'Hallo ';
        break;
  
      case 'en':
        greeting = 'Hello ';
        break;
  
      case 'es':
        greeting = 'Hola ';
        break;
  
      case 'fr':
        greeting = 'Bonjour ';
        break;
  
      default:
        greeting = 'Hola ';
        break;
    }
  
    return (
      <div >
        {greeting}
        {children}
      </div>
    );
  };
  
  export default Greetings;