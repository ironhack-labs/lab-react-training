import React from 'react';

const Greetings = (props) => {
  let message = '';
  if (props.lang === 'en') {
    message = 'Hello ';
  }
  if (props.lang === 'fr') {
    message = 'Bonjour ';
  }
  if (props.lang === 'de') {
    message = 'Hallo ';
  }
  if (props.lang === 'es') {
    message = 'Hola ';
  }

  return (
    <div className="border-box">
      <h3>
        {message}
        {props.children}
      </h3>
    </div>
  );
};

export default Greetings;
