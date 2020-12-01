import React from 'react';

// Create a Greetings component with 2 props:

// lang: A string that could be ,"de","en","es","fr"
// children: A text
const Greetings = ({ lang, children }) => {
  console.log(children);
  let greeting = '';
  switch (lang) {
    case 'de':
      greeting = 'Hallo';
      break;

    case 'es':
      greeting = 'Hola';
      break;

    case 'fr':
      greeting = 'Bonjour';
      break;

    default:
      greeting = 'Hello';
      break;
  }
  return (
    <>
      <p>
        {greeting} {children}
      </p>
    </>
  );
};

export default Greetings;
