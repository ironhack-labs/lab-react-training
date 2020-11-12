import React from 'react';

function Greetings(props) {
  const language = { de: 'Hallo', en: 'Hello', es: 'Hola', fr: 'Bonjour' };

  return (
    <div
      style={{
        border: 'solid 1px',
        margin: '0.8% auto',
        padding: '0.4%',
      }}
    >
      {language[props.lang]} {props.children}
    </div>
  );
}

export default Greetings;
