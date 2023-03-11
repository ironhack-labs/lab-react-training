import React from 'react';
import './index.css'

const Greetings = ({ lang, children }) => {
  const getWord = (language) => {
    switch (language) {
      case "de":
        return "hallo"
        break;
      case "en":
        return "hello"
        break;
      case "es":
        return "hola"
        break;
      case "fr":
        return "bonjour"
        break;
      default:
        break;
    }
  }
  return (
    <div className='Greetings'>
      <p>{getWord(lang)} {children}</p>
    </div>
  );
};

export default Greetings;