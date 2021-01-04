import React from 'react';

function Greetings(props) {
  let greeting = '';
  if (props.lang === 'de') {
    greeting = 'hallo';
  } else if (props.lang === 'en') {
    greeting = 'hello';
  } else if (props.lang === 'es') {
    greeting = 'hola';
  } else {
    greeting = 'bonjour';
  }
  return (
    <div className="greetings-card">
      {greeting} {props.children}
    </div>
  );
}

export default Greetings;
