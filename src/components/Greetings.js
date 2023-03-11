import React from 'react';

export default function Greetings({lang, children}) {
  
    const getWord = (language) => {
      switch (language) {
        case 'de':
          return 'Hallo';
        case 'en':
          return 'Hello';
        case 'es':
          return 'Hola';
        case 'fr':
          return 'Bonjour';
        default:
          break;
      }
    };
    return (
      <div className="m-3 border border-dark d-flex flex-row mb-3 align-items-center pt-3 ps-3">
        <p>
          <b>
          {getWord(lang)} {children}
          </b>
          
        </p>
      </div>
    );
  };

