import React from 'react';

function Greetings(props) {
  function greetInLanguage() {
    if (props.lang === 'de') {
      return "Hallo";
    } else if (props.lang === 'fr') {
      return "Bonjour";
    } else if (props.lang === 'en') {
      return "Hi";
    } else if (props.lang === 'es') {
      return "Hola";
    }
  }

  return (
    <div className="Greetings">
      <p>
        {greetInLanguage()} {props.children} <br />
      </p>
    </div>
  );
}

export default Greetings;
