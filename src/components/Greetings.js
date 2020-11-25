import '../style/Greetings.css';
import React from 'react';

function Greetings(props) {
  function greetLan(lang) {
    switch (lang) {
      case 'de':
        return 'Hallo ';
      case 'fr':
        return 'Bonjour ';
      default:
        throw new Error('Language not found Dx');
    }
  }

  return (
    <div className="Greetings">
      <h1>
        {greetLan(props.lang)} {props.children}
      </h1>
    </div>
  );
}

export default Greetings;
