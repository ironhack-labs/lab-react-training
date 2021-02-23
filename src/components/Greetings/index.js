import React from 'react'


const Greetings = ({lang, children}) => {

function greeting(){
  switch(lang){
    case "de": 
    return "Hallo";
      break;
    case "en": 
    return "Hello";
      break;
    case "es": 
      return "Hola"
      break;
    case "fr": 
      return "Bonjour"
      break;
    default: return "Yo!?"
  }
}

  return (
    <div>
    <p>{greeting()} {children}</p> 
    </div>
  )
}

export default Greetings









