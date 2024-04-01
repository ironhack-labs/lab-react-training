import React from "react";
import './Greetings.css'

const language = {
  "de":"Hallo",
  "en":"Hello",
  "es":"Hola",
  "fr":"Bonjour" 
}

function Greetings({ lang, children }) {

  return (
    <p className="greetings-p">
      {language[lang]}: {children}
    </p>
  );
}

export default Greetings;