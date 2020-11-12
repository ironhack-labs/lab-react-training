import React from 'react';
import './greetings.css';

function Greetings(props) {
  let translate = '';
  switch (props.lang) {
    case 'de':
      translate = 'Hallo';
      break;

    case 'en':
      translate = 'Hello';
      break;

    case 'es':
      translate = 'Hola';
      break;

    case 'fr':
      translate = 'Bonjour';
      break;
  }
  return (
    <div className="greetings">
      <h1>
        {translate} {props.children}
      </h1>
    </div>
  );
}

export default Greetings;
