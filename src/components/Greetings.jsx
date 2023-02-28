import React from 'react';

function Greetings(props) {
  const { lang, children } = props;
  const myGreet = (language) => {
    switch (language) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Alo';
      case 'fr':
        return 'Bonjour';
    }
  };
  return (
    <div>
      <h3>
        {myGreet(lang)} {children}
      </h3>
    </div>
  );
}

export default Greetings;
