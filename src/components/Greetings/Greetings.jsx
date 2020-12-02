import React from 'react';
import './Greetings.css';

function Greetings(props) {
  if (props.lang === 'es') {
    return <h3 lang={props.lang}>Hola {props.name}</h3>;
  }
  if (props.lang === 'de') {
    return <h3 lang={props.lang}>Guten Tag {props.name}</h3>;
  }
}

export default Greetings;
