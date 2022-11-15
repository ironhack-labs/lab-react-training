import React from 'react'

function Greetings(props) {
    const { lang, children } = props;
    let greeting = '';
  
   switch (lang) {
    case "de":
        greeting = "Hallo";
    break;
    case "en":
        greeting = "hello";
        break;
        case "es":
            greeting = "Hola";
            break;
            case "fr":
                greeting = "Bonjour";
                break;
   }

   
  return (<p>{greeting} {children}</p>)
    
}

export default Greetings;