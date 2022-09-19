import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  let message = '';
  if (props.lang === 'fr') {
    message = `Bonjour`;
  }
  if (props.lang === 'de') {
    message = `Hallo`;
  }
  if (props.lang === 'es') {
    message = `Ola`;
  }
  if (props.lang === 'en') {
    message = `Hello`;
  }
  return (
    <div className="box-container">
      <h1>Greetings:</h1>
      {message} {props.children}
    </div>
  );
};

export default Greetings;
