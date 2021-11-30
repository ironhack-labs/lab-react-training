import React from 'react';
import './Greetings.css';


function Greetings(props) {
    const {lang} = props
    let greeting = ""

  if (lang === 'de') {
    greeting = 'Hallo';
  } else if (lang === 'en') {
    greeting = 'Hello';
  } else if (lang === 'es') {
    greeting = 'Hola';
  } else if (lang === 'cat') {
    greeting = 'Hola';
  } else if (lang === 'fr') {
    greeting = 'Bonjour';
  }

    return (
      <div className="greetingCard">
         <p>{greeting} {props.children}!</p>
      </div>
    );
}


export default Greetings