import React from 'react';

function Greetings(props) {
  let helloWord = 'Hello';

  if (props.lang === 'pt') {
    helloWord = 'Olá';
  } else if (props.lang === 'es') {
    helloWord = 'Hola';
  } else if (props.lang === 'de') {
    helloWord = 'Guten Tag';
  } else if (props.lang === 'fr') {
    helloWord = 'Bonjour';
  }

  return (
    <p className="greetings">
      {helloWord} {props.children}
    </p>
  );
}

export default Greetings;
