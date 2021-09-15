import React from 'react';

import './style.css';

const Greetings = ({ lang, children }) => {
  const listGreetings = [
    { lang: 'de', greetings: 'Hallo' },
    { lang: 'en', greetings: 'Hello' },
    { lang: 'es', greetings: 'Hola' },
    { lang: 'fr', greetings: 'Bonjour' },
  ];

  return (
    <div className="main">
      {listGreetings
        .filter((c) => c.lang === lang)
        .map((c, index) => (
          <p className="greetings" key={index}>
            {c.greetings + ' ' + children}
          </p>
        ))}
    </div>
  );
};

export default Greetings;
