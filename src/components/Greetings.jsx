import React from 'react';

const Greetings = ({ lang, children }) => {
  return (
    <article className='idCard'>
      <h3>{lang === 'de' ? `Hallo ${children}` : undefined}</h3>
      <h3>{lang === 'es' ? `Hola ${children}` : undefined}</h3>
      <h3>{lang === 'en' ? `Hello ${children}` : undefined}</h3>
      <h3>{lang === 'fr' ? `Bonjour ${children}` : undefined}</h3>
    </article>
  );
};

export default Greetings 