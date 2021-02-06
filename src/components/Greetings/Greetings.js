import React from 'react';

const Greetings = ({ children, lang }) => {
  let hello = '';
  if (lang === 'es') {
    hello = 'Hola';
  } else if (lang === 'de') {
    hello = 'Hallo';
  } else if (lang === 'en') {
    hello = 'Hello';
  } else {
    hello = 'Bonjour';
  }

  return (
    <article className="greeting">
      <p className="withBorder">
        <span>{hello}</span> {children}
      </p>
    </article>
  );
};

export default Greetings;
