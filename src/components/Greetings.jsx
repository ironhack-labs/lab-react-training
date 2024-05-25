import React from 'react';
import './Greetings.css';

const Greetings = ({ lang, children }) => {
  const getGreeting = (lang) => {
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
    <div className="greetings">
      {getGreeting(lang)} {children}
    </div>
  );
};

export default Greetings;