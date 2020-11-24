import React from 'react';

function Greetings(props) {
  const languages = {
    en: 'Hello',
    de: 'Hallo',
    es: 'Hola',
    fr: 'Bonjour',
  };

  return (
    <div className="greetings">
      <p>
        {languages[props.lang]} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
