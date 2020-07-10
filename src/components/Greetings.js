import React from 'react';

const Greetings = (props) => {
  let helloWord = 'Hello';

  if (props.lang === 'pt') {
    helloWord = 'Olá';
  } else if (props.lang === 'es') {
    helloWord = 'Hola';
  }

  return (
    <h1>
      {helloWord} {props.children}
    </h1>
  );
};

export default Greetings;
