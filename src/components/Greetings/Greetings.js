import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  const selectLang = (lang) => {
    switch (lang) {
      case 'es':
        return 'Hola';
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'fr':
        return 'Bonjour';
    }
  };
  return (
    <div className="languages">
      <p>
        {selectLang(props.lang)} {props.children}
      </p>
    </div>
  );
};
export default Greetings;
