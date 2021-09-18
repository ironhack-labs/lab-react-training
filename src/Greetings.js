import React from 'react';

const Greetings = (props) => {
  return (
    <h4>
      {`${props.lang === 'en' ? 'hello ' : ''}${
        props.lang === 'fr' ? 'bonjour ' : ''
      }${props.lang === 'de' ? 'hallo ' : ''}${
        props.lang === 'es' ? 'hola ' : ''
      }
      ${props.children}`}
    </h4>
  );
};

export default Greetings;
