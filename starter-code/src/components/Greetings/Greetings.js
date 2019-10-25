import './Greetings.css';
import React from 'react';

const Greetings = ({ lang, name }) => {
  let children;
  if (lang === 'de') {
    children = 'Hallo'
  } else if (lang === 'en') {
    children = 'Hello'
  } else if (lang === 'es') {
    children = 'Hola'
  } else if (lang === 'fr') {
    children = 'Bonjour'
  }
  return (
    <div className="box">
      {children} {name}
    </div>
  );
};

export default Greetings;
