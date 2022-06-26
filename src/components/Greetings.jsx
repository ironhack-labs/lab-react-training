import React from 'react';

import './Greetings.css'

const Greetings = (props) => {
  const pickLanguage = (lang) => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };
  return (
    <div className='greeting'>
      {pickLanguage(props.lang)} {props.children}
    </div>
  );
};

export default Greetings;
