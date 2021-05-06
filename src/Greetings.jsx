import React from 'react';
import './Greetings.css';

function Greetings(props) {
  let greeting = 'Bonjour';
  if (props.lang === 'de') {
    greeting = 'Hallo';
  }
  if (props.lang === 'en') {
    greeting = 'Hello';
  }
  if (props.lang === 'es') {
    greeting = 'Holá';
  }

  return (
    <div className="Greetings">
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
