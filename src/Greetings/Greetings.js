import React from 'react';
import './Greetings.css';

const Greetings = (prop) => {

  const greetingLang = (language) =>{
    return {
      'es' : 'Hola',
      'en' : 'Hello',
      'de' : 'Hallo',
      'fr' : 'Bonjour'
    }[language];
  };

  return (
  <h3 className='greeting'>{greetingLang(prop.lang)} {prop.children}</h3>
  );
};

export default Greetings;
