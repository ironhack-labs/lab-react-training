import React from 'react';

const Greetings = ({ lang, children }) => (
  <h3 className="Greetings">
    {lang === 'de' ? 'Hallo ' : lang === 'en' ? 'Hello ' : lang === 'es' ? 'Holi ' : 'Bonjour '}
    {children}
  </h3>
);

export default Greetings;
