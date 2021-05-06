import React from 'react';
import '../App.css';

function Greetings(props) {
  return (
    <div className="greetings">
      <p>
        {greetings[props.lang]} {props.children}
      </p>
    </div>
  );
}

const greetings = {
  de: 'Hallo',
  en: 'Hello',
  es: 'Hola',
  fr: 'Bonjour',
};

export default Greetings;
