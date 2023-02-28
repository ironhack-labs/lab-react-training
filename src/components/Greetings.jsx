import React from 'react'

function Greetings(props) {
    const {lang} = props;
    const greetText = (language) => {
        if (language === "en") return "Hello";
        else if (language === "fr") return "Bonjour";
        else if (language === "de") return "Hallo";
        else if (language === "es") return "Hola";
    }
    
  return (
    <div>{`${greetText(lang)} ${props.children}`}</div>
  )
}

export default Greetings