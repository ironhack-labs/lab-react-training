import React from 'react';

function Greetings({ language, children }) {
  const getGreet = (language) => {
    switch (language) {
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      case 'en':
        return 'Hello!';
      default:
        return 'Hola';
    }
  };
  return (
    <div>
      <p>
        {getGreet(language)} {children}
      </p>
    </div>
  );
}

export default Greetings;
