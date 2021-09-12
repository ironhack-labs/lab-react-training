import React from 'react';

const Greeting = ({ lang, children }) => {
  const hello = (lang) => {
    let hello;
    switch (lang) {
      case 'de':
        hello = 'Hallo';
        break;
      case 'en':
        hello = 'Hello';
        break;
      case 'es':
        hello = 'Hola';
        break;
      case 'fr':
        hello = 'Bonjour';
        break;
      default:
        hello = 'Olá';
        break;
    }
    return hello;
  };

  return (
    <div className="greeting-container">
      <h3>
        {hello(lang)} {children}
      </h3>
    </div>
  );
};

export default Greeting;
