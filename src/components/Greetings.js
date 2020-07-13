import React from 'react';

const Greetings = (props) => {
  let helloWorld = 'Hello';
  if (props.lang === 'pt') {
    helloWorld = 'Olá';
  } else if (props.lang === 'es') {
    helloWorld = 'Hola';
  }
  return (
    <div>
      <h1>
        {helloWorld} {props.children}
      </h1>
    </div>
  );
};

export default Greetings;
