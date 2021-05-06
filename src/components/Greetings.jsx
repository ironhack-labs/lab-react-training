import React from 'react';
import '../App.css';

const greetings = {
  de: 'Hallo',
  en: 'Hello',
  es: 'Hola',
  fr: 'Bonjour',
};

function Greetings(props) {
  return (
    <div>
      <p>
        {greetings[props.lang]} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
