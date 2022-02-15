import React from 'react';

function Greetings(props) {
  let greeting = '';
  if (props.lang === 'de') {
    greeting = 'Hallo ';
  } else if (props.lang === 'fr') {
    greeting = 'Bonjour ';
  } else if (props.lang === 'en') {
    greeting = 'Hello ';
  } else if (props.lang === 'es') {
    greeting = 'Hola ';
  }

  return (
    <div className="greetings-card">
      <p>
        {greeting}
        {props.name}
      </p>
    </div>
  );
}

export default Greetings;