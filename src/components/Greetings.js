import React from 'react';
import '../styles/Greetings.css';

const Greetings = ({ lang, children }) => {
  let greetings;
  if (lang === 'es') {
    greetings = 'Hola';
  } else if (lang === 'es') {
    greetings = 'Hello';
  } else if (lang === 'de') {
    greetings = 'Hallo';
  } else if (lang === 'fr') {
    greetings = 'Bonjour';
  }

  return <div className="greetings">{greetings} {children}</div>;
};

export default Greetings;
