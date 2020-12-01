import React from 'react';
import './Greetings.css';

function Greetings(props) {
  if (props.lang === 'es') {
    return <h3 lang={props.lang}>Hola {props.name}</h3>;
  }
  if (props.lang === 'fr') {
    return <h3 lang={props.lang}>Bonjour {props.name}</h3>;
  }
  if (props.lang === 'de') {
    return <h3 lang={props.lang}>Hallo {props.name}</h3>;
  }
  if (props.lang === 'en') {
    return <h3 lang={props.lang}>Hello {props.name}</h3>;
  }
}

export default Greetings;
