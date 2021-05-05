import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default function Greetings(props) {
  var message;
  if (props.lang === 'de') {
    message = `Hallo ${props.children}`;
  } else if (props.lang === 'en') {
    message = `Hello ${props.children}`;
  } else if (props.lang === 'es') {
    message = `Hola ${props.children}`;
  } else if (props.lang === 'fr') {
    message = `Bonjour ${props.children}`;
  }

  return (
    <div>
      <h3>{message}</h3>
    </div>
  );
}
