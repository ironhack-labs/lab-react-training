import React from 'react';
import './Greetings.css';


function greet(props) {
  if(props.lang === 'de') {
    return 'Hallo';
  }
  if(props.lang === 'fr') {
    return 'Bonjour';
  }
  if(props.lang === 'es') {
    return 'Hola';
  }
  if(props.lang === 'en') {
    return 'Hello';
  }
};


function Greetings(props) {
  return (
    
    <p>{greet(props)} {props.children}</p>
  )
};

export default Greetings;