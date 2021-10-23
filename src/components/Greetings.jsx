import React from 'react'

export default function Greetings(props) {

  const languages = (props.lang);
  
  function SwitchLang(){
    switch(languages) {
      case "de":
        return "Hallo";
      case "en": 
        return "Hello";
      case "fr": 
        return "Bonjour";
      default:
        return "Hola";
  
    }
  }
  return (
    <div>
      <h2>{SwitchLang()} {props.children}</h2>
    </div>
  )
}

