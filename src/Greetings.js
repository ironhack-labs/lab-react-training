import React from 'react';


function Greetings ({ children }) {
  
    let lang = ""
    if (children === 'es') {
        lang = "Hola"
    } else if (children === 'de') {
        lang = "Hallo"
    } else if (children === 'fr') {
        lang = "Bonjour"
    } else {
        lang = "Hello"
    }
    return <div>Hello There {children}</div>;
  
  }

export default Greetings;