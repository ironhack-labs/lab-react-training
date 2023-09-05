import React from "react";

const Greetings = ({lang, children}) => {
    let greeting = '';

  if (lang === 'de') {
    greeting = 'Hallo';
  } else if (lang === 'es') {
    greeting = 'Hola';
  } else if (lang === 'fr') {
    greeting = 'Bonjour';
  } else {
    greeting = 'Hello';
  }
    return (
        <div>
            {greeting}, {children}!
        </div>
    )
};

export default Greetings;