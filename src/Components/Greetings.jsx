import React from 'react';

const Greetings = (props) => {
  function hello(lang) {
    if (lang === 'de') return 'Hallo';
    if (lang === 'fr') return 'Bonjour';
    if (lang === 'en') return 'Hello';
    if (lang === 'es') return 'Hola';
  }

  return (
    <div className="greetings">
      {hello(props.lang)} {props.children}
    </div>
  );
};

export default Greetings;
