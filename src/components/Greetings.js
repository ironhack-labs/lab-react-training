import React from 'react';

export default function Greetings(props) {
  let greeting = '';
  if (props.lang === 'de') {
    greeting = 'Hallo';
  }
  if (props.lang === 'fr') {
    greeting = 'Bonjour';
  }

  return (
    <div className="container">
      <h3 className="card">
        {greeting} {props.children}
      </h3>
    </div>
  );
}
