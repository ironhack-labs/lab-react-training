import React from 'react'

function Greetings(props) {
  let {lang, children} = props

  switch(lang){
    case "de":
      lang = "Hallo";
      break;
    case "fr":
      lang = "Bonjour";
      break;
    case "en":
      lang = "Hello";
      break;
    case "es":
      lang = "Hola";
      break;
      default:
        return "DKFDDHVAM";
        
  }
   return (
    <p>{lang} {children}</p>
   )
}

export default Greetings