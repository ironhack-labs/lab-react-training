import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  let text = '';
  let language = props.lang;
  // console.log(language);
  // console.log(props.lang);
  const checkLanguage = (language) => {
    switch (language) {
      case 'en':
        text = 'Hello';
        break;
      case 'es':
        text = 'Holla';
        break;
      case 'fr':
        text = 'Bonjour';
        break;
      case 'pt':
        text = 'Olá';
        break;
      case 'de':
        text = 'Hallo';
        break;
      default:
        return 'Enter a correct language';
    }
  };
  checkLanguage(language);
  // console.log(`This is the switch result ${text}`);
  return (
    <div className="greetings">
      <h1>Greetings</h1>
      <p>
        {text} {props.name}
      </p>
    </div>
  );
};
export default Greetings;
