import React from 'react';

 
function Greetings(props) {
    const { lang, children } = props

    let greeting = ""

    switch(lang) {
        case "de":
        greeting = "Hallo" 
        break

        case "en":
        greeting = "Hello"
        break

        case "es":
        greeting = "Hola"
        break
        
        case "fr":
        greeting = "Bonjour"
        break

        default: 
    }


  return (
    <div className="Greetings">
      
      <h1>{ greeting } { children }</h1>

    </div>
  );
}
 
export default Greetings