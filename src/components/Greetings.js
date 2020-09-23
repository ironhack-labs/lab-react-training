import React from 'react';

export default function Greetings(props) {
  let Greeting = '';
  if (props.lang === 'de') {
    Greeting = 'Hallo';
  } else if (props.lang === 'en') {
    Greeting = 'Hello';
  } else if (props.lang === 'es') {
    Greeting = 'Hola';
  } else if (props.lang === 'fr') {
    Greeting = 'Bonjour';
  }
  return (
    <div>
      <div>
        <p>
          {Greeting} {props.children}
        </p>
      </div>
    </div>
  );
}
