import React from 'react';

// two props: lang and children

const Greetings = ({ lang, children }) => {

  let greetingText = '';

  //switch statement to considered the different possible languages

  switch (lang) {
    case 'de':
      greetingText = `Hallo ${children}!`;
      break;
    case 'en':
      greetingText = `Hello ${children}!`;
      break;
    case 'es':
      greetingText = `¡Hola ${children}!`;
      break;
    case 'fr':
      greetingText = `Bonjour ${children}!`;
      break;
    default:
      greetingText = `Hello ${children}!`;
      break;
  }


  // Rendering the answer
  
  return <div>{greetingText}</div>;
};

export default Greetings;
