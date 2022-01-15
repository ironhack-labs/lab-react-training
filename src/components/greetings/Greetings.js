import React from 'react';
import './Greetings.css';

// Create a Greetings component with 2 props:
// lang: A string that can have values: "de", "en", "es" or "fr"
// children: A text

const Greetings = (props) => {
  const {lang, children} = props;

  if (lang === "de") return (
    <div className="greetings-wrapper"><p>Hallo {children}</p></div>
  )
  if (lang === "fr") return (
    <div className="greetings-wrapper"><p>Bonjour {children}</p></div>
  )
  if (lang === "es") return (
    <div className="greetings-wrapper"><p>Hola {children}</p></div>
  )
  return (
    <div className="greetings-wrapper"><p>Hello {children}</p></div>
  )
}

export default Greetings;


