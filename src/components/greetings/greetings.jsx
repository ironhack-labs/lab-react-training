import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  let { children, lang } = props;
  let mssg = '';

  switch (lang) {
    case 'de':
      mssg = 'Gutentag';
      break;
    case 'en':
      mssg = 'Hello';
      break;
    case 'es':
      mssg = 'Bon dia';
      break;
    case 'fr':
      mssg = 'Bonjour';
      break;
    default:
      mssg = 'hi';
      break;
  }

  return (
    <div className="greetcontainer">
      <h2>
        {mssg} {children}
      </h2>
    </div>
  );
};

export default Greetings;
