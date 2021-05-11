import React from 'react';
import './Greetings.css';

function Greetings(props) {
  const greetings = {
    de: 'Hallo',
    fr: 'Bonjour',
    es: 'Hola',
    en: 'Hi',
  };
  return (
    <div className="greetings">
      {greetings[props.lang]}, {props.children}
    </div>
  );
}

export default Greetings;
