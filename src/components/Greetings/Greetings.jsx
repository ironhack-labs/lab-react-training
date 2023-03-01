import React from 'react';
import '../../styles/Greetings.css';
import Children from './Children';

function Greetings({ lang, children }) {
  let text;
  if (lang === 'de') {
    text = 'Ludwig';
  } else if (lang === 'en') {
    text = 'Hello';
  } else if (lang === 'es') {
    text = 'Hola';
  } else if (lang === 'fr') {
    text = 'François';
  }

  return (
    <div className="container-default">
      <Children text={text} children={children} />
    </div>
  );
}

export default Greetings;
