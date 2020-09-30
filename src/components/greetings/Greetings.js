import React from 'react';
import './Greetings.css';

function Greetings(props) {
  const languages = {
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
    de: 'Hallo',
  };
  return (
    <div className="greetings">
      <p>
        {languages[props.lang]} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
