import React from 'react';

const Greetings = ({ lang, children }) => {
  let greet;
  const greeting = () => {
    switch (lang) {
      case 'de':
        greet = 'Hallo';
        break;
      case 'en':
        greet = 'Hello';
        break;
      case 'es':
        greet = 'Hola';
        break;
      case 'fr':
        greet = 'Bonjour';
        break;
      default:
        greet = 'Hi';
    }
    return greet;
  };

  return (
    <div className="Greetings">
      <h2>
        {greeting(lang)} {children}
      </h2>
    </div>
  );
};

export default Greetings;
