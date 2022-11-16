import React from 'react'

function Greeting(props) {
    const {lang} = props;
    const getGreeting = (language) => {
        if(language === "de") return "Hallo";
        if(language === "es") return "Hola";
        if(language === "fr") return "Bonjour";
        if(language === "en") return "Hello";
        else return "Olá";
    }
  return (
    <div>
        <p>{getGreeting(lang)} {props.children}</p>
    </div>
  )
}

export default Greeting