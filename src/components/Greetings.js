import React from 'react'

export default function Greetings( {lang, children }) {
    let greetings

    switch(lang) {
        case "en": 
            greetings= "Hello";
            break;
        case "es":
            greetings="Hola";
            break;
        case "fr":
            greetings="Bonjour";
            break;
        case "de":
            greetings="Hallo";
            break;
            default: 
            greetings="Hi";
        
    }

  return (
    <div className="greetings">
    <p>
        {greetings}
        {children}
    </p>

    </div>
  )
}
