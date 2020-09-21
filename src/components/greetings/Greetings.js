import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  let language = props.lang;
  const checkLanguage = (language) => {
    switch (language) {
      case 'en':
        return 'Hello';
      case 'es':
        return 'Holla';
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Enter a correct language';
    }
  };

  return (
    <div className="greetings">
      <p>
        {checkLanguage(language)} {props.name}
      </p>
    </div>
  );
};
export default Greetings;
